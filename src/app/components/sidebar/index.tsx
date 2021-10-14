import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const SidebarContainer = styled.div`
  ${tw`
    flex flex-col fixed top-64 right-8 z-50
  `}
`;

const SidebarText = styled.span`
  transform: rotate(90deg);
  ${tw`
    text-xxs text-gray-400 uppercase tracking-widest block
  `}
`;

export function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarText>Materace dla&nbsp;ciebie i&nbsp;twojej rodziny</SidebarText>
    </SidebarContainer>
  );
}
