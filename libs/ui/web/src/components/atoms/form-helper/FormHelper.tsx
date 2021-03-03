import { FieldMetaProps } from "formik";
import styled from "styled-components";

/* eslint-disable-next-line */

export type HelperProps = FieldMetaProps<any>;

export const FormHelper = styled.span<HelperProps>`
  color: pink;
`;

export default FormHelper;
