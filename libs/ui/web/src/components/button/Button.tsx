import styled, { css } from "styled-components";
import BaseButton from "../base-button/BaseButton";

export const Button = styled(BaseButton)`
  /* common styles here */
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 1px;
  border: none;
  border-radius: 5px;

  :hover {
    opacity: 0.8;
  }

  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return css`
          background: linear-gradient(
            to right top,
            rgba(101, 223, 201, 1),
            rgba(108, 219, 235, 1)
          );
          color: #fff;
        `;

      case "secondary":
        return css`
          background-color: red;
        `;

      case "tertiary":
        return css`
          background-color: blue;
        `;

      default:
      case undefined:
        return;
    }
  }}
  ${({ size }) => {
    switch (size) {
      case "small":
        return css`
          padding: 0.5rem 1.5rem;
        `;

      default:
      case "medium":
        return css`
          padding: 1rem 3rem;
        `;

      case "large":
        return css`
          padding: 1.5rem 4.5rem;
        `;
    }
  }};
`;

export default Button;
