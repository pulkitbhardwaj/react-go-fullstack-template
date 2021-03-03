import { FC } from "react";
import styled, { css } from "styled-components";

export interface ListTypeProps {
  direction?: "row" | "column";
  align?:
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "initial"
    | "inherit";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "initial"
    | "inherit";
}

/* eslint-disable-next-line */
export interface ListProps extends ListTypeProps {
  type?: "unordered" | "ordered";
}

const UnorderedList = styled.ul<ListTypeProps>`
  ${listStyle}
`;

const OrderedList = styled.ol<ListTypeProps>`
  ${listStyle}
`;

export const List: FC<ListProps> = ({ type, children, ...props }) => {
  switch (type) {
    case "ordered":
      return <OrderedList {...props}>{children}</OrderedList>;

    default:
    case "unordered":
      return <UnorderedList {...props}>{children}</UnorderedList>;
  }
};

export default List;

function listStyle({
  align = "center",
  direction = "row",
  justify = "space-evenly",
}: ListTypeProps) {
  return css`
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
    width: 100%;
  `;
}
