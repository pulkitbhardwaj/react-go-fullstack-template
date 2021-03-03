import React, { FC } from "react";
import { ViewProps } from "react-native";
import styled from "styled-components/native";

/* eslint-disable-next-line */
export interface FormProps extends ViewProps {}

const StyledForm = styled.View`
  color: pink;
`;

export const Form: FC<FormProps> = (props) => {
  return <StyledForm></StyledForm>;
};

export default Form;
