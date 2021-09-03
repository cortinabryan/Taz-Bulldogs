import React, { useState } from "react";

import axios from "axios";

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

  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, phone, subject, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      subject: subject.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
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
            <ContactForm onSubmit={handleSubmit}>
              <ContactP>
                <ContactLabel htmlFor="name">Name</ContactLabel>
                <ContactInput placeholder="Full Name" id="name" required />
              </ContactP>
              <ContactP>
                <ContactLabel htmlFor="email">Email</ContactLabel>
                <ContactInput placeholder="Email Address" id="email" required />
              </ContactP>
              <ContactP>
                <ContactLabel htmlFor="phone">Phone</ContactLabel>
                <ContactInput placeholder="Phone Number" id="phone" required />
              </ContactP>
              <ContactP>
                <ContactLabel htmlFor="subject">Subject</ContactLabel>
                <ContactInput
                  placeholder="Subject"
                  id="subject"
                  required
                ></ContactInput>
              </ContactP>

              <ContactP className="full">
                <ContactLabel htmlFor="message">Message</ContactLabel>
                <ContactText placeholder="Message" id="message" requried />
              </ContactP>

              <ContactP className="full">
                <ContactButton type="submit">{status}</ContactButton>
              </ContactP>
            </ContactForm>
          </ContactBottomWrapper>
        </ContactWrapper>
      </ContactContainer>
    </div>
  );
};

export default Contact;
