import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Subtitle } from "../../components/subtitle";
import { Map } from "../../components/googleMaps";

const ContactContainer = styled.section`
  ${tw`
    container
  `}
`;

const ContactList = styled.ul`
  ${tw`
    text-lg font-bold font-serif mb-12
  `}
`;

const ContactListItem = styled.li`
  ${tw`
    block
  `}
  &:not(:last-child) {
    ${tw`
       mb-2
    `}
  }
`;

export function SectionContact() {
  return (
    <ContactContainer>
      <Subtitle subtitle1={"DANE"} subtitle2={"Kontaktowe"} />
      <div className="grid grid-cols-12 gap-10 pt-14">
        <div className="col-span-7">
          <Map />
        </div>
        <div className="col-span-5">
          <p className="h6 text-gray-600 mb-10">KONTAKT</p>
          <h3 className="text-xl font-bold mb-3">
            PPUH MAX s.c. Sebastian Pauś, Agnieszka Pauś
          </h3>
          <ContactList>
            <ContactListItem>ul. Piłsudskiego 7</ContactListItem>
            <ContactListItem>63-640 Bralin</ContactListItem>
          </ContactList>
          <ContactList>
            <ContactListItem>tel. 507-502-706</ContactListItem>
            <ContactListItem>
              e-mail:{" "}
              <a href="mailto:biuro@meble-max.com.pl">biuro@meble-max.com.pl</a>
            </ContactListItem>
          </ContactList>
          <ContactList>
            <ContactListItem>NIP: 619-199-25-00</ContactListItem>
            <ContactListItem>REGON: 301055005</ContactListItem>
            <ContactListItem>
              Nr konta BZ WBK: 58 1090 1144 0000 0001 1159 9611
            </ContactListItem>
          </ContactList>
          <a className="cta cta-yellow" href="mailto:biuro@meble-max.com.pl">
            ZAPRASZAMY DO KONTAKTU
          </a>
        </div>
      </div>
    </ContactContainer>
  );
}
