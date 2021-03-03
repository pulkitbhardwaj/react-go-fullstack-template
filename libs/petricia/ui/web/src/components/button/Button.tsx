import { BaseButton } from "@incroy/ui/web";
import styled, { css } from "styled-components";

export const Button = styled(BaseButton)`
  /* common styles here */
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 1px;
  border: none;
  border-radius: 5px;

  box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, 0.2),
    -3px -3px 5px 0 rgba(255, 255, 255, 0.8);

  /* box-shadow: inset 6px 6px 10px 0 rgba(255, 255, 255, 0.8),
    inset -6px -6px 10px 0 rgba(0, 0, 0, 0.2); */

  :hover {
    opacity: 0.9;
  }

  ${({ variant, theme }) => {
    switch (variant) {
      case "primary":
        return css`
          background: ${theme.background.primary};
          color: #fff;
        `;

      case "secondary":
        return css`
          background: ${theme.background.secondary};
          color: #fff;
        `;

      case "tertiary":
        return css`
          background: ${theme.background.tertiary};
          color: ${theme.colors.primary};
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
          height: 2rem;
          padding: 0.5rem 3rem;
        `;

      case "large":
        return css`
          padding: 1.5rem 4.5rem;
        `;
    }
  }}
`;

export default Button;
