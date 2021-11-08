import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";

/**
 * Image
 */
import LogoImg from "../../assets/images/max-meble-gray.svg";
import { SCREENS } from "../responsive";

const FooterContainer = styled.footer`
  ${tw`
  w-full mt-40
  `}
`;

const FooterGrid = styled.div`
  ${tw`
    container grid grid-cols-12 pb-20
  `}
`;

const FooterCopy = styled.div`
  ${tw`
    text-center py-12 border-t border-gray-400 text-gray-600
  `}
`;

const FooterNavContainer = styled.div`
  ${tw`
    grid grid-cols-7
  `}
`;

const MenuTitle = styled.h6`
  ${tw`
    mb-5
  `}
`;

const NavItem = styled.li`
  ${tw`
      flex items-center font-light text-xs tracking-wider uppercase
    `}
  @media (min-width: ${SCREENS.md}) {
    &:not(:last-child) {
      ${tw`
        mb-4
      `}
    }
  }
  a {
    &:hover {
      ${tw`
        underline
      `}
    }
  }
  span,
  a {
    ${tw`
      contents
    `}
  }
`;

const SidebarNav = styled.nav`
  ${tw`
    grid grid-cols-6 mt-6
  `}
  ul {
    ${tw`
       col-span-2 flex flex-wrap items-center md:justify-end
    `}

    li {
      ${tw`
        font-bold text-base
    `};

      a {
        &:not(.active) {
          ${tw`
          text-gray-400 hover:text-yellow
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
          mr-6
        `}
      }
    }
  }
`;

export function Footer() {
  return (
    <FooterContainer>
      <FooterGrid>
        <div className="col-span-5">
          <img src={LogoImg} alt="MaxMeble" />
          <SidebarNav>
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
        </div>
        <div className="col-span-7">
          <FooterNavContainer>
            <div className="col-span-2">
              <MenuTitle>MENU</MenuTitle>
              <nav>
                <ul>
                  <NavItem>
                    <Link to="/">OFERTA</Link>
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
                </ul>
              </nav>
            </div>
            <div className="col-span-3">
              <MenuTitle>KONTAKT</MenuTitle>
              <nav>
                <ul>
                  <NavItem>
                    <span className="text-gray-600">tel. </span>
                    <a href="tel:+48 507-502-706">507-502-706</a>
                  </NavItem>
                  <NavItem>
                    <span className="text-gray-600">e-mail: </span>
                    <a href="mailto:biuro@meble-max.com.pl">
                      biuro@meble-max.com.pl
                    </a>
                  </NavItem>
                </ul>
              </nav>
            </div>
            <div className="col-span-2">
              <MenuTitle>ADRES</MenuTitle>
              <nav>
                <ul>
                  <NavItem>ul. Piłsudskiego 7</NavItem>
                  <NavItem>63-640 Bralin</NavItem>
                </ul>
              </nav>
            </div>
          </FooterNavContainer>
        </div>
      </FooterGrid>
      <FooterCopy>
        <span>&copy; 2021 Wszelkie prawa zastrzeżone</span>
      </FooterCopy>
    </FooterContainer>
  );
}
