import { RefObject, useCallback, useEffect, useRef, useState } from "react";

// Types

interface WebcamState {
  hasUserMedia: boolean;
  src?: string;
}

export interface SnapshotDimensions {
  width: number;
  height: number;
}

export interface WebcamConfig {
  audio?: boolean;
  audioConstraints?: MediaStreamConstraints["audio"];
  forceSnapshotSourceSize?: boolean;
  imageSmoothing?: boolean;
  mirrored?: boolean;
  minSnapshotHeight?: number;
  minSnapshotWidth?: number;
  onUserMedia?: (stream: MediaStream) => void;
  onUserMediaError?: (error: string) => void;
  snapshotFormat?: "image/webp" | "image/png" | "image/jpeg";
  snapshotQuality?: number;
  videoConstraints?: MediaStreamConstraints["video"];
}

export interface Webcam extends WebcamState {
  ref: RefObject<HTMLVideoElement>;
  getSnapshot(snapshotDimensions?: SnapshotDimensions): string | undefined;
}

/**
 * Hook
 *
 * @param config Webcam configuration
 * @returns Webcam object
 */
export function useWebcam(config: WebcamConfig): Webcam {
  // Default configuration
  const {
    audio = true,
    forceSnapshotSourceSize = false,
    imageSmoothing = true,
    mirrored = false,
    onUserMedia = () => undefined,
    onUserMediaError = () => undefined,
    snapshotFormat = "image/webp",
    snapshotQuality = 0.92,
    audioConstraints,
    videoConstraints,
    minSnapshotHeight,
    minSnapshotWidth,
  } = config;

  const unmounted = useRef<boolean>();
  const mediaStream = useRef<MediaStream>();
  const canvas = useRef<HTMLCanvasElement>();
  const ctx = useRef<CanvasRenderingContext2D | null>();

  const ref = useRef<HTMLVideoElement>(null);
  const [state, setState] = useState<WebcamState>({
    hasUserMedia: false,
  });

  useEffect(() => {
    if (!(navigator?.mediaDevices && navigator?.mediaDevices.getUserMedia)) {
      onUserMediaError("getUserMedia not supported");
      return;
    }

    if (!state.hasUserMedia && "mediaDevices" in navigator) {
      const constraints: MediaStreamConstraints = {
        video:
          typeof videoConstraints !== "undefined" ? videoConstraints : true,
      };

      if (audio) {
        constraints.audio =
          typeof audioConstraints !== "undefined" ? audioConstraints : true;
      }

      navigator?.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
          if (unmounted.current) {
            stopMediaStream(stream);
          } else {
            mediaStream.current = stream;

            try {
              if (ref.current) {
                ref.current.srcObject = stream;
              }

              setState({ hasUserMedia: true });
            } catch (error) {
              setState({
                hasUserMedia: true,
                src: window?.URL.createObjectURL(stream),
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
      unmounted.current = true;

      if (state.hasUserMedia && mediaStream.current) {
        stopMediaStream(mediaStream.current);

        if (state.src) {
          window?.URL.revokeObjectURL(state.src);
        }
      }
    };
  }, [
    state,
    onUserMediaError,
    audio,
    onUserMedia,
    videoConstraints,
    audioConstraints,
  ]);

  const getSnapshot = useCallback(
    (snapshotDimensions?: SnapshotDimensions): string | undefined => {
      if (!state.hasUserMedia) {
        return undefined;
      }

      if (!ref.current) {
        return undefined;
      }

      if (!state.hasUserMedia || !ref.current.videoHeight) {
        return undefined;
      }

      if (!ctx.current) {
        let canvasWidth = ref.current.videoWidth;
        let canvasHeight = ref.current.videoHeight;
        if (!forceSnapshotSourceSize) {
          const aspectRatio = canvasWidth / canvasHeight;

          canvasWidth = minSnapshotWidth || ref.current.clientWidth;
          canvasHeight = canvasWidth / aspectRatio;

          if (minSnapshotHeight && canvasHeight < minSnapshotHeight) {
            canvasHeight = minSnapshotHeight;
            canvasWidth = canvasHeight * aspectRatio;
          }
        }

        canvas.current = document?.createElement("canvas");
        canvas.current.width = snapshotDimensions?.width || canvasWidth;
        canvas.current.height = snapshotDimensions?.height || canvasHeight;
        ctx.current = canvas.current.getContext("2d");
      }

      if (ctx.current && canvas.current) {
        // mirror the screenshot
        if (mirrored) {
          ctx.current.translate(canvas.current.width, 0);
          ctx.current.scale(-1, 1);
        }

        ctx.current.imageSmoothingEnabled = imageSmoothing;
        ctx.current.drawImage(
          ref.current,
          0,
          0,
          snapshotDimensions?.width || canvas.current.width,
          snapshotDimensions?.height || canvas.current.height
        );

        // invert mirroring
        if (mirrored) {
          ctx.current.scale(-1, 1);
          ctx.current.translate(-canvas.current.width, 0);
        }
      }

      return canvas.current?.toDataURL(snapshotFormat, snapshotQuality);
    },
    [
      forceSnapshotSourceSize,
      imageSmoothing,
      mirrored,
      minSnapshotHeight,
      minSnapshotWidth,
      snapshotFormat,
      snapshotQuality,
      state.hasUserMedia,
    ]
  );

  return { ...state, ref, getSnapshot };
}

function stopMediaStream(stream: MediaStream | undefined) {
  if (stream) {
    if (stream.getVideoTracks && stream.getAudioTracks) {
      stream.getVideoTracks().map((track) => track.stop());
      stream.getAudioTracks().map((track) => track.stop());
    } else {
      ((stream as unknown) as MediaStreamTrack).stop();
    }
  }
}
