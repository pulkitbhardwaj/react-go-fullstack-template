import React, { FC } from "react";
import styled from "styled-components";

/* eslint-disable-next-line */
export interface InputProps {}

const StyledInput = styled.input`
  color: pink;
`;

export const Input: FC<InputProps> = (props) => {
  return <StyledInput {...props} />;
};

export default Input;
