import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyles from "./menuStyles";
import { HashLink as Link } from "react-router-hash-link";

const ListContainer = styled.nav`
  ${tw`
  flex
  list-none
  items-center
  md:col-span-3
  `}
`;

const NavItemContainer = styled.ul`
  ${tw`
  flex
  items-center
  `}
`;

const NavItem = styled.li<{ menu?: any }>`
  ${tw`
    uppercase
    text-sm
    tracking-widest
    font-bold
  `}
  &:not(:last-child) {
    ${tw`
    mr-6
    xl:mr-14
    `}
  }
  a {
    ${tw`
    block
      relative
    `}
    &:hover {
      &:before {
        transform: scaleY(1) translateX(-50%);
      }
    }
    &:before {
      content: "";
      height: 3px;
      transform: scaleY(0) translateX(-50%);
      ${tw`
        absolute
        -bottom-0.5
        left-1/2
        block
        w-full
        bg-orange
        transition
        duration-200
        ease-out
        origin-center
      `}
    }
  }

  ${({ menu }) =>
    menu &&
    css`
      ${tw`
    text-sm tracking-wider
  `}
      &:not(:last-child) {
        ${tw` mb-4 `}
      }
    `};
`;

export function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.md });

  if (isMobile)
    return (
      <Menu right styles={menuStyles}>
        <NavItemContainer>
          <NavItem menu>
            <Link to="/">HOME</Link>
          </NavItem>
          <NavItem menu>
            <Link to="/">OFERTA</Link>
          </NavItem>
          <NavItem menu>
            <Link to="/">O FIRMIE</Link>
          </NavItem>
          <NavItem menu>
            <Link to="/">JAKOŚĆ</Link>
          </NavItem>
          <NavItem menu>
            <Link to="/">KONTAKT</Link>
          </NavItem>
        </NavItemContainer>
      </Menu>
    );

  return (
    <ListContainer>
      <NavItemContainer>
        <NavItem>
          <Link to="/">HOME</Link>
        </NavItem>
        <NavItem>
          <Link smooth to="#offer">
            OFERTA
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/">O FIRMIE</Link>
        </NavItem>
        <NavItem>
          <Link to="/">JAKOŚĆ</Link>
        </NavItem>
        <NavItem>
          <Link to="/">KONTAKT</Link>
        </NavItem>
      </NavItemContainer>
    </ListContainer>
  );
}
