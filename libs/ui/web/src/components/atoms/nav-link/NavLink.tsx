import styled from "styled-components";

/* eslint-disable-next-line */
export interface NavLinkProps {}

export const NavLink = styled.a`
  text-decoration: none;
  font-size: 1rem;
  letter-spacing: 1px;
  font-weight: 700;
  color: #fff;

  :hover {
    opacity: 0.9;
  }
`;

export default NavLink;
