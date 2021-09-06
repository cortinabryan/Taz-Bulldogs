import React, { useState } from "react";

import emailjs from "emailjs-com";

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
  ContactImage,
} from "./ContactElement";
import img1 from "../../images/taz-supreme.png";
import { Button } from "../ButtonElements";
import { ThemeConsumer } from "styled-components";

const Contact = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b9rku7p",
        "template_6qv8hhe",
        e.target,
        "user_aWRvmrd0dDcvamxpQVaUR"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    e.target.reset();
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
            <ContactForm onSubmit={sendEmail}>
              <ContactP>
                <ContactLabel htmlFor="name">Name</ContactLabel>
                <ContactInput
                  placeholder="Full Name"
                  name="name"
                  id="name"
                  required
                />
              </ContactP>
              <ContactP>
                <ContactLabel htmlFor="email">Email</ContactLabel>
                <ContactInput
                  placeholder="Email Address"
                  name="email"
                  id="email"
                  required
                />
              </ContactP>
              <ContactP>
                <ContactLabel htmlFor="phone">Phone</ContactLabel>
                <ContactInput
                  placeholder="Phone Number"
                  name="phone"
                  id="phone"
                  required
                />
              </ContactP>
              <ContactP>
                <ContactLabel htmlFor="subject">Subject</ContactLabel>
                <ContactInput
                  placeholder="Subject"
                  name="subject"
                  id="subject"
                  required
                ></ContactInput>
              </ContactP>

              <ContactP className="full">
                <ContactLabel htmlFor="message">Message</ContactLabel>
                <ContactText
                  placeholder="Message"
                  name="message"
                  id="message"
                  requried
                />
              </ContactP>

              <ContactP className="full">
                <ContactButton type="submit" value="Send">
                  Submit
                </ContactButton>
              </ContactP>
            </ContactForm>
          </ContactBottomWrapper>
        </ContactWrapper>
      </ContactContainer>
    </div>
  );
};

export default Contact;
