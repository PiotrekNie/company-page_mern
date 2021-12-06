import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";

interface BreadcrumbsProps {
  link: { url: string; title: string }[];
}

const BreadcrumbsContainer = styled.ul`
  ${tw`
    flex flex-wrap p-0
  `};

  li {
    ${tw`
      block
    `}
  }
`;

export function Breadcrumbs(props: BreadcrumbsProps) {
  return (
    <BreadcrumbsContainer>
      <li>
        <Link to="/" title="Strona główna">
          Home
        </Link>
      </li>
      {props.link.map((el, index) => {
        return (
          <li key={index}>
            {props.link.length - 1 === index ? (
              el.title
            ) : (
              <Link to={el.url} title={el.url}>
                {el.title}
              </Link>
            )}
          </li>
        );
      })}
      ;
    </BreadcrumbsContainer>
  );
}
