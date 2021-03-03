import {
  FormikErrors,
  FormikHelpers,
  FormikProvider,
  FormikTouched,
  useFormik,
} from "formik";
import { DetailedHTMLProps, FormHTMLAttributes, forwardRef } from "react";
import styled from "styled-components";

/* eslint-disable-next-line */
export interface FormProps<Values = any>
  extends Omit<
    DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>,
    "onSubmit" | "onReset"
  > {
  /**
   * Initial values of the form
   */
  initialValues: Values;
  /**
   * Initial status
   */
  initialStatus?: any;
  /** Initial object map of field names to specific error for that field */
  initialErrors?: FormikErrors<Values>;
  /** Initial object map of field names to whether the field has been touched */
  initialTouched?: FormikTouched<Values>;
  /**
   * Reset handler
   */
  onReset?: (values: Values, formikHelpers: FormikHelpers<Values>) => void;
  /**
   * Submission handler
   */
  onSubmit: (
    values: Values,
    formikHelpers: FormikHelpers<Values>
  ) => void | Promise<any>;
  /**
   * A Yup Schema or a function that returns a Yup schema
   */
  validationSchema?: any | (() => any);
  /**
   * Validation function. Must return an error object or promise that
   * throws an error object where that object keys map to corresponding value.
   */
  validate?: (
    values: Values
  ) => void | Record<string, unknown> | Promise<FormikErrors<Values>>;
}

const BaseForm = styled.form`
  color: pink;
`;

export const Form = forwardRef<HTMLFormElement, FormProps>(
  (
    {
      initialValues,
      initialStatus,
      initialErrors,
      initialTouched,
      onSubmit,
      onReset,
      validate,
      validationSchema,
      children,
      ...props
    },
    ref
  ) => {
    const form = useFormik({
      initialValues,
      initialStatus,
      initialErrors,
      initialTouched,
      onSubmit,
      onReset,
      validate,
      validationSchema,
    });

    return (
      <BaseForm
        onSubmit={form.handleSubmit}
        onReset={form.handleReset}
        {...props}
        ref={ref}
      >
        <FormikProvider value={form}>{children}</FormikProvider>
      </BaseForm>
    );
  }
);

export default Form;
