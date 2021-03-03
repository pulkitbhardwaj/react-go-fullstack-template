import { FC } from "react";
import { polyfillGetUserMedia } from "./polyfill";
import { useWebcam } from "./useWebcam";

// polyfill based on https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
polyfillGetUserMedia();

export interface WebcamProps
  extends Omit<React.HTMLProps<HTMLVideoElement>, "ref"> {
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

export const Webcam: FC<WebcamProps> = (props) => {
  const videoStyle = props.mirrored
    ? {
        ...props.style,
        transform: `${props.style?.transform || ""} scaleX(-1)`,
      }
    : props.style;

  const { src, videoRef } = useWebcam(props);

  return (
    <video
      autoPlay
      src={src}
      muted={props.audio}
      playsInline
      ref={videoRef}
      style={videoStyle}
    />
  );
};
