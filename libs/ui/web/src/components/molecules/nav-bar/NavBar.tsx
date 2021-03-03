import { Children, FC, ReactNode } from "react";
import ListItem from "../list-item/ListItem";
import List, { ListTypeProps } from "../list/List";

/* eslint-disable-next-line */
export interface NavBarProps extends ListTypeProps {}

export const NavBar: FC<NavBarProps> = ({
  children,
  direction,
  align,
  justify,
}) => {
  return (
    <List direction={direction} align={align} justify={justify}>
      {Children.map(children, renderItem)}
    </List>
  );
};

export default NavBar;

function renderItem(item: ReactNode, index: number) {
  return <ListItem key={index}>{item}</ListItem>;
}
