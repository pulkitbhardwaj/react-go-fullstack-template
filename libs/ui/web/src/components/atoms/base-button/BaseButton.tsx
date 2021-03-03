import {
  FC,
  FocusEvent,
  MouseEvent as ReactMouseEvent,
  ReactElement,
} from "react";
import styled from "styled-components";

/* eslint-disable-next-line */
export interface ButtonProps {
  type?: "button" | "reset" | "submit";
  className?: string;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  onClick?: (event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onFocus?: (event: FocusEvent<HTMLButtonElement>) => void;
  onHover?: (event: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => void;
  renderLeading?: ReactElement;
  renderTrailing?: ReactElement;
}

const DefaultButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 3rem;
  border: ${({ variant }) => !variant && "1px solid black"};
  background-color: lightgrey;
  outline: none;
  cursor: pointer;
`;

const IconPlaceholder = styled.span`
  border: 1px dashed black;
  padding: 0.5rem 0.5rem;
  background-color: white;
`;

export const BaseButton: FC<ButtonProps> = ({
  type = "button",
  className,
  variant,
  onHover,
  onClick,
  onFocus,
  renderLeading,
  renderTrailing,
  children,
}) => {
  return (
    <DefaultButton
      type={type}
      className={className}
      onClick={onClick}
      onMouseOver={onHover}
      onFocus={onFocus}
    >
      {renderLeading || (!variant && <IconPlaceholder />)}
      {children}
      {renderTrailing || (!variant && <IconPlaceholder />)}
    </DefaultButton>
  );
};

export default BaseButton;
