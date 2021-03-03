import { useFormikContext } from "formik";
import React, { FC } from "react";
import { ButtonProps as NativeButtonProps } from "react-native";
import styled from "styled-components/native";

function handlePress() {}

/* eslint-disable-next-line */
export interface ButtonProps extends NativeButtonProps {}

const StyledButton = styled.Button``;

export const Button: FC<ButtonProps> = (props) => {
  const form = useFormikContext();

  return (
    <StyledButton
      title=""
      onPress={(e) => {
        form?.handleSubmit(e as any);
        props.onPress(e);
      }}
      disabled={form?.isSubmitting}
    />
  );
};

export default Button;
