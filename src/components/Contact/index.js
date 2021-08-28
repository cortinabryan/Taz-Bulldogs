import React, { useState } from "react";

// import axios from "axios";

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

const Contact = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const state = {
    name: "",
    lastname: "",
    email: "",
    message: "",
    sent: false,
  };

  // Handle inputs

  const handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  const handleLastName = (e) => {
    this.setState({
      lastname: e.target.value,
    });
  };

  const handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  const handleMessage = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  return (
    <div>
      <ContactContainer>
        <ContactWrapper>
          <ContactInfo>
            {/* <ContactImage> */}
            <ContactH1>Taz Bulldogs</ContactH1>
            {/* <img src={img1} alt="" className="kennel1" /> */}
            {/* </ContactImage> */}
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
                <ContactInput
                  placeholder="Full Name"
                  name="name"
                  // value={this.state.name}
                  // onChange={this.handleName}
                />
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
