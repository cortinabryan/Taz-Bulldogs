import React, { useState } from "react";

import {
  ContactContainer,
  ContactWrapper,
  ContactH1,
  ContactRow,
  ContactInput,
  ContactMsg,
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
      <ContactContainer id="contact">
        <ContactWrapper>
          <ContactH1>Contact Us</ContactH1>
          <ContactRow>
            <ContactInput placeholder="Full Name" />
            <ContactInput placeholder="Email Address" />
          </ContactRow>
          <ContactRow>
            <ContactInput placeholder="Phone Number" />
            <ContactInput placeholder="Subject"></ContactInput>
          </ContactRow>
          <ContactText placeholder="Message" />
          <ContactBtnWrapper>
            <Button
              to="/available-puppies"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
            >
              Send Message
            </Button>
          </ContactBtnWrapper>
        </ContactWrapper>
      </ContactContainer>
    </div>
  );
};

export default Contact;
