import { RefObject, useEffect, useRef, useState } from "react";

// Types

interface WebcamState {
  hasUserMedia: boolean;
  src?: string;
}

export interface ScreenshotDimensions {
  width: number;
  height: number;
}

export interface WebcamConfig {
  audio: boolean;
  audioConstraints?: MediaStreamConstraints["audio"];
  forceScreenshotSourceSize: boolean;
  imageSmoothing: boolean;
  mirrored: boolean;
  minScreenshotHeight?: number;
  minScreenshotWidth?: number;
  onUserMedia: (stream: MediaStream) => void;
  onUserMediaError: (error: string) => void;
  screenshotFormat: "image/webp" | "image/png" | "image/jpeg";
  screenshotQuality: number;
  videoConstraints?: MediaStreamConstraints["video"];
}

export interface Webcam extends WebcamState {
  videoRef: RefObject<HTMLVideoElement>;
  getScreenshot(screenshotDimensions?: ScreenshotDimensions): string | null;
}

// Hook
export function useWebcam({
  audio = true,
  forceScreenshotSourceSize = false,
  imageSmoothing = true,
  mirrored = false,
  onUserMedia = () => undefined,
  onUserMediaError = () => undefined,
  screenshotFormat = "image/webp",
  screenshotQuality = 0.92,
  ...props
}: WebcamConfig): Webcam {
  let unmounted = false,
    mediaStream: MediaStream | null,
    ctx: CanvasRenderingContext2D | null;

  const canvasRef = useRef<HTMLCanvasElement>(document.createElement("canvas"));
  const videoRef = useRef<HTMLVideoElement>(null);

  const [state, setState] = useState<WebcamState>({
    hasUserMedia: false,
  });

  useEffect(() => {
    if (!hasGetUserMedia()) {
      onUserMediaError("getUserMedia not supported");
      return;
    }

    if (!state.hasUserMedia && "mediaDevices" in navigator) {
      const constraints: MediaStreamConstraints = {
        video:
          typeof props.videoConstraints !== "undefined"
            ? props.videoConstraints
            : true,
      };

      if (audio) {
        constraints.audio =
          typeof props.audioConstraints !== "undefined"
            ? props.audioConstraints
            : true;
      }

      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
          if (unmounted) {
            stopMediaStream(stream);
          } else {
            mediaStream = stream;

            try {
              if (videoRef.current) {
                videoRef.current.srcObject = stream;
              }

              setState({ hasUserMedia: true });
            } catch (error) {
              setState({
                hasUserMedia: true,
                src: window.URL.createObjectURL(stream),
              });
            }

            onUserMedia(stream);
          }
        })
        .catch((e) => {
          setState({ hasUserMedia: false });
          onUserMediaError(e);
        });
    }

    return () => {
      unmounted = true;

      if (state.hasUserMedia) {
        stopMediaStream(mediaStream);

        if (state.src) {
          window.URL.revokeObjectURL(state.src);
        }
      }
    };
  }, [state, props]);

  function getScreenshot(screenshotDimensions?: ScreenshotDimensions) {
    if (!state.hasUserMedia) {
      return null;
    }

    const canvas = getCanvas(screenshotDimensions);

    return canvas && canvas.toDataURL(screenshotFormat, screenshotQuality);
  }

  function getCanvas(screenshotDimensions?: ScreenshotDimensions) {
    if (!videoRef.current) {
      return null;
    }

    if (!state.hasUserMedia || !videoRef.current.videoHeight) {
      return null;
    }

    if (!ctx) {
      let canvasWidth = videoRef.current.videoWidth;
      let canvasHeight = videoRef.current.videoHeight;
      if (!forceScreenshotSourceSize) {
        const aspectRatio = canvasWidth / canvasHeight;

        canvasWidth = props.minScreenshotWidth || videoRef.current.clientWidth;
        canvasHeight = canvasWidth / aspectRatio;

        if (
          props.minScreenshotHeight &&
          canvasHeight < props.minScreenshotHeight
        ) {
          canvasHeight = props.minScreenshotHeight;
          canvasWidth = canvasHeight * aspectRatio;
        }
      }

      canvasRef.current.width = screenshotDimensions?.width || canvasWidth;
      canvasRef.current.height = screenshotDimensions?.height || canvasHeight;
      ctx = canvasRef.current.getContext("2d");
    }

    if (ctx && canvasRef.current) {
      // mirror the screenshot
      if (mirrored) {
        ctx.translate(canvasRef.current.width, 0);
        ctx.scale(-1, 1);
      }

      ctx.imageSmoothingEnabled = imageSmoothing;
      ctx.drawImage(
        videoRef.current,
        0,
        0,
        screenshotDimensions?.width || canvasRef.current.width,
        screenshotDimensions?.height || canvasRef.current.height
      );

      // invert mirroring
      if (mirrored) {
        ctx.scale(-1, 1);
        ctx.translate(-canvasRef.current.width, 0);
      }
    }

    return canvasRef.current;
  }

  return { ...state, videoRef, getScreenshot };
}

function hasGetUserMedia() {
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}

function stopMediaStream(stream: MediaStream | null) {
  if (stream) {
    if (stream.getVideoTracks && stream.getAudioTracks) {
      stream.getVideoTracks().map((track) => track.stop());
      stream.getAudioTracks().map((track) => track.stop());
    } else {
      ((stream as unknown) as MediaStreamTrack).stop();
    }
  }
}
