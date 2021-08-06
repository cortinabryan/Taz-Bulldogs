import React, { useState } from "react";

import {
  ContactContainer,
  ContactInfoWrapper,
  ContactInfo,
  ContactList,
  ContactListItem,
  ContactWrapper,
  ContactH1,
  ContactH3,
  ContactP,
  ContactI,
  ContactRow,
  ContactLabel,
  ContactInput,
  ContactMsg,
  ContactButton,
  ContactBottomWrapper,
  ContactTextWrapper,
  ContactForm,
  ContactText,
  ContactBtnWrapper,
} from "./ContactElement";
import { Button } from "../ButtonElements";

const Contact = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <div>
      <ContactContainer>
        <ContactWrapper>
          <ContactInfo>
            <ContactH1>Taz Bulldogs</ContactH1>
            <ContactList>
              <ContactListItem>
                <ContactI className="fa fa-phone"></ContactI>(702) 555-5555
              </ContactListItem>
              <ContactListItem>taz-bulldogs@gmail.com</ContactListItem>
            </ContactList>
          </ContactInfo>
          <ContactBottomWrapper id="contact">
            <ContactH3>Contact Us</ContactH3>
            <ContactForm>
              <ContactP>
                <ContactLabel>Name</ContactLabel>
                <ContactInput placeholder="Full Name" />
              </ContactP>
              <ContactP>
                <ContactLabel>Email</ContactLabel>
                <ContactInput placeholder="Email Address" />
              </ContactP>

              <ContactP>
                <ContactLabel>Phone</ContactLabel>
                <ContactInput placeholder="Phone Number" />
              </ContactP>
              <ContactP>
                <ContactLabel>Subject</ContactLabel>
                <ContactInput placeholder="Subject"></ContactInput>
              </ContactP>

              <ContactP className="full">
                <ContactLabel>Message</ContactLabel>
                <ContactText placeholder="Message" />
              </ContactP>

              <ContactP className="full">
                <ContactButton>Send Message</ContactButton>
              </ContactP>
            </ContactForm>
          </ContactBottomWrapper>
        </ContactWrapper>
      </ContactContainer>
    </div>
  );
};

export default Contact;
