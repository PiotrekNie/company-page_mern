import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyles from "./menuStyles";

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
            <a href="/">HOME</a>
          </NavItem>
          <NavItem menu>
            <a href="/">OFERTA</a>
          </NavItem>
          <NavItem menu>
            <a href="/">O FIRMIE</a>
          </NavItem>
          <NavItem menu>
            <a href="/">JAKOŚĆ</a>
          </NavItem>
          <NavItem menu>
            <a href="/">KONTAKT</a>
          </NavItem>
        </NavItemContainer>
      </Menu>
    );

  return (
    <ListContainer>
      <NavItemContainer>
        <NavItem>
          <a href="/">HOME</a>
        </NavItem>
        <NavItem>
          <a href="/">OFERTA</a>
        </NavItem>
        <NavItem>
          <a href="/">O FIRMIE</a>
        </NavItem>
        <NavItem>
          <a href="/">JAKOŚĆ</a>
        </NavItem>
        <NavItem>
          <a href="/">KONTAKT</a>
        </NavItem>
      </NavItemContainer>
    </ListContainer>
  );
}
