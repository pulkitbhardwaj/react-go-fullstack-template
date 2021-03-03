import { FormikHelpers, useFormik } from "formik";
import React, { FC, useContext } from "react";
import styled, { ThemeContext } from "styled-components";

/* eslint-disable-next-line */
export interface SearchProps<Value> {
  placeholder?: string;
  className?: string;
  /**
   * Reset handler
   */
  onReset?: (values: Value, formikHelpers: FormikHelpers<Value>) => void;
  /**
   * Submission handler
   */
  onSubmit: (
    values: Value,
    formikHelpers: FormikHelpers<Value>
  ) => void | Promise<any>;
}

const SearchIcon = () => {
  const theme = useContext(ThemeContext);

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.721 12.5547L9.89169 8.72633C10.5776 7.79069 10.9451 6.6592 10.9399 5.49867C10.9245 2.46957 8.47626 0.0173157 5.45036 0C5.43171 0 5.41306 0 5.39441 0C2.39866 0.0168899 -0.0163298 2.46143 8.31671e-05 5.46033C0.0148183 8.48995 2.46322 10.943 5.48965 10.9603C6.65446 10.9652 7.78969 10.5933 8.72624 9.9L8.72991 9.89633L8.72624 9.9L8.73091 9.89567L12.5556 13.7217C12.5719 13.7393 12.5889 13.755 12.6062 13.7723C12.8224 13.9782 13.1329 14.0512 13.418 13.9631C13.7032 13.8751 13.9187 13.6398 13.9815 13.3477C14.0443 13.0557 13.9447 12.7524 13.721 12.5547ZM1.09293 5.46267C1.09293 5.45033 1.09293 5.43767 1.09293 5.42533C1.09787 4.27226 1.56025 3.16839 2.37833 2.35664C3.19641 1.54489 4.30315 1.09177 5.45502 1.097C7.87671 1.10848 9.83746 3.0701 9.8504 5.49433C9.8504 5.50967 9.8504 5.525 9.8504 5.54033C9.84458 6.69258 9.38173 7.79532 8.56367 8.60593C7.7456 9.41654 6.63936 9.86861 5.48832 9.86267C3.06559 9.85117 1.10442 7.88794 1.09293 5.46267Z"
        fill={theme.colors.primary}
      />
    </svg>
  );
};

const SearchForm = styled.form`
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  border: 1px black solid;
  height: 2rem;
  width: 100%;
  background-color: white;
`;

const SearchInput = styled.input`
  width: 100%;
  font-size: 1rem;
  padding: 1rem;
  background: transparent;
  border: none;
  outline: none;
`;

const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  height: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

const initialValues = {
  search: "",
};

export const BaseSearch: FC<SearchProps<typeof initialValues>> = ({
  className,
  onSubmit,
  onReset,
  placeholder,
}) => {
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
  } = useFormik({
    initialValues,
    onSubmit,
    onReset,
  });

  return (
    <SearchForm
      className={className}
      onSubmit={handleSubmit}
      onReset={handleReset}
    >
      <SearchInput
        type="text"
        name="search"
        id="search"
        value={values.search}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        autoComplete="off"
      />
      <SearchButton type="submit">
        <SearchIcon />
      </SearchButton>
    </SearchForm>
  );
};

export default BaseSearch;
