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
    flex flex-col
  `}
`;

const ListItem = styled.li`
  ${tw`
      font-bold font-serif
    `}
  &:not(:last-child) {
    ${tw`
        mb-6
      `}
  }

  ul {
    ${tw`
        mt-6 text-sm pl-6
      `}
  }
`;

export function Sidebar(props: ListProps) {
  return (
    <SitebarContainer className={props.width ? `w-${props.width}` : "w-full"}>
      <List>
        {props.items.map((item, index) => (
          <ListItem key={index}>
            <Link to={item.link} title={item.tekst}>
              {item}
              {item.submenu &&
                item.submenu.map((submenu, index) => (
                  <li key={index}>
                    <Link to={submenu.link} title={submenu.tekst}>
                      {submenu.tekst}
                    </Link>
                  </li>
                ))}
            </Link>
          </ListItem>
        ))}
      </List>
    </SitebarContainer>
  );
}
