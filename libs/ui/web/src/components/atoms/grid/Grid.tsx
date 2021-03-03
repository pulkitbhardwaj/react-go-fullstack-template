import { Key } from "react";
import styled from "styled-components";

/* eslint-disable-next-line */
export interface GridProps {
  gap?: Key;
}

const Grid = styled.div<GridProps>`
  display: grid;
  gap: ${({ gap }) => gap};
`;

export default Grid;
