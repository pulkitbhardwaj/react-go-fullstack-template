import styled from "styled-components";

/* eslint-disable-next-line */
export interface VideoProps {
  mirrored: boolean;
}

export const Video = styled.video<VideoProps>`
  transform: ${(props) => props.mirrored && "scaleX(-1)"};
`;

export default Video;
