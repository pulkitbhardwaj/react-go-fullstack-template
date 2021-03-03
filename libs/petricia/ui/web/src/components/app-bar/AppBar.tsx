import { NavBar, NavLink } from "@incroy/ui/web";
import NextLink from "next/link";
import { FC } from "react";
import styled from "styled-components";
import Button from "../button/Button";
import Logo from "../logo/Logo";
import Search from "../search/Search";

/* eslint-disable-next-line */
export interface AppBarProps {}

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: stretch;
  max-height: 4rem;
  background: ${({ theme }) => theme.background.primary};
`;

const menu = [
  {
    href: "/home",
    name: "Home",
  },
  {
    href: "/about",
    name: "About",
  },
  {
    href: "/blog",
    name: "Blog",
  },
];

export const AppBar: FC<AppBarProps> = (props) => {
  return (
    <Header>
      <Logo height="2.5rem" width="10rem" />
      <Search
        onSubmit={() => {
          //
        }}
      />
      <NavBar>
        {menu.map(({ href, name }) => (
          <NextLink href={href} passHref>
            <NavLink>{name}</NavLink>
          </NextLink>
        ))}
        <NextLink href="/login" replace>
          <Button
            variant="tertiary"
            onClick={() => {
              //
            }}
          >
            Login
          </Button>
        </NextLink>
      </NavBar>
    </Header>
  );
};

export default AppBar;
