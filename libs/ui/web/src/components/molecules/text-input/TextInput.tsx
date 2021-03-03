import { useField } from "formik";
import React, { forwardRef, Fragment } from "react";
import FormHelper from "../form-helper/FormHelper";
import Input from "../input/Input";
import Label from "../label/Label";

/* eslint-disable-next-line */
export interface TextInputProps {
  type?:
    | "email"
    | "number"
    | "password"
    | "search"
    | "tel"
    | "text"
    | "time"
    | "url";
  label?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ type = "text", label, ...props }, ref) => {
    const [field, meta] = useField(props);

    // console.log('render text input', props.name);

    return (
      <Fragment>
        {label && <Label htmlFor={field.name}>{label}</Label>}
        <Input
          type={type}
          {...props}
          {...field}
          {...meta}
          ref={ref}
          autoComplete="off"
        />
        <FormHelper {...meta}>{meta.error}</FormHelper>
      </Fragment>
    );
  }
);

export default TextInput;
