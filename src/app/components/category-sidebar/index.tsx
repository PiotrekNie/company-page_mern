import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";

interface ListProps {
  width?: string | "w-full";
  items: {
    tekst: string;
    link: string;
    submenu?: { tekst: string; link: string }[];
  }[];
}

const SitebarContainer = styled.div`
  ${tw`
    bg-gray-100 py-8 px-6
  `}
`;

const List = styled.ul`
  ${tw`
    flex flex-col sticky top-0
  `}
`;

const ListItem = styled.li`
  ${tw`
      font-bold font-serif
    `}
  &:not(:last-child) {
    ${tw`
        mb-5
      `}
  }

  a {
    ${tw`
      hover:underline
    `}
  }

  ul {
    ${tw`
        mt-5 text-sm pl-6
      `}
    li {
      ${tw`
        font-normal font-sans
      `}
      &:not(:last-child) {
        ${tw`
          mb-4
        `}
      }
    }
  }
`;

export function Sidebar(props: ListProps) {
  return (
    <SitebarContainer className={props.width ? `w-${props.width}` : "w-full"}>
      <List>
        {props.items.map((item, index) => (
          <ListItem key={index}>
            <Link to={item.link} title={item.tekst}>
              {item.tekst}
            </Link>
            {item.submenu && (
              <ul>
                {item.submenu.map((submenu, index) => (
                  <li key={index}>
                    <Link to={submenu.link} title={submenu.tekst}>
                      {submenu.tekst}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </ListItem>
        ))}
      </List>
    </SitebarContainer>
  );
}
