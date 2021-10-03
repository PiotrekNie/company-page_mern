import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";

const NavbarContainer = styled.div`
  min-height: 140px;
  ${tw`
    container
    flex
    flex-row
    items-center
  `}
`;

const LogoContainer = styled.div``;

export function NavBar() {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
    </NavbarContainer>
  );
}
