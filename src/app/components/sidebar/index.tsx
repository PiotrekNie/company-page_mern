import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarContainer = styled.div`
  ${tw`
    flex flex-col fixed top-96 right-40 z-50 w-4
  `}
`;

const SidebarText = styled.span`
  transform: rotate(-90deg);
  ${tw`
    text-xxs text-gray-400 uppercase tracking-widest block whitespace-nowrap
  `}
`;

const SidebarNav = styled.nav<{ isLang?: boolean; isSocials?: boolean }>`
  ${tw`
    mt-16
  `};

  ul {
    ${tw`
    p-0 m-0 flex flex-col items-center justify-center text-center
  `};
  }

  li {
    ${tw`
    text-xs font-bold
    `};

    a {
      &:not(.active) {
        ${tw`
          text-gray-400 hover:text-gray-600
        `}
      }

      &.active {
        ${tw`
          text-gray-600
        `}
      }

      ${tw`
        tracking-wider
      `}
    }

    &:not(:last-child) {
      ${tw`
        mb-6 block
      `}
    }

    ${({ isLang }) => isLang && tw`text-xs`}

    ${({ isSocials }) => isSocials && tw`text-base`}
  }
`;

export function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarText>Materace dla&nbsp;ciebie i&nbsp;twojej rodziny</SidebarText>
      <SidebarNav isLang>
        <ul>
          <li>
            <Link to="/" className="active">
              PL
            </Link>
          </li>
          <li>
            <Link to="/">EN</Link>
          </li>
          <li>
            <Link to="/">DE</Link>
          </li>
        </ul>
      </SidebarNav>
      <SidebarNav isSocials>
        <ul>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </li>
        </ul>
      </SidebarNav>
    </SidebarContainer>
  );
}
