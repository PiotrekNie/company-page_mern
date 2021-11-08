import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";
import { NavItems } from "./navitems";

const Header = styled.header`
  ${tw`
  w-full
  `}
`;

const NavbarContainer = styled.div`
  ${tw`
  container
    md:grid
    md:grid-cols-4
    flex
    items-center
    relative
    justify-between
  md:min-h-9 py-6 md:py-0
  `}
`;

const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
  `}
`;

export function NavBar() {
  return (
    <Header>
      <NavbarContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <NavItems />
      </NavbarContainer>
    </Header>
  );
}
