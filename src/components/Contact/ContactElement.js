import styled from "styled-components";

export const ContactContainer = styled.div`
  background: #0c0c0c;
  font-family: "Poppins", sans-serif;
  margin-left: auto;
  margin-right: auto;
  padding: 1em;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const ContactWrapper = styled.div`
  margin: 20px;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 2fr;

  @media screen and (min-width: 700px) {
    /* display: grid;
    grid-template-columns: 1fr 2fr; */
  }

  @media screen and (min-width: 375px) {
    /* height: 90rem; */
  }
`;

export const ContactI = styled.i`
  color: blue;
`;

export const ContactInfo = styled.div`
  color: #fff;
  /* background: rgb(98, 2, 0); */
  /* padding: 20px; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* background: #bf0303; Old browsers */
  /* background: linear-gradient(to bottom right, #870000, #190a05); */
`;

export const ContactImage = styled.div`
  /* background: blue; */
  background-size: contain;
  color: #fff;
  justify-self: start;
  cursor: default;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;

  align-items: center;
  font-weight: bold;
  height: 100%;
  background-repeat: no-repeat;
  flex: 1;

  img {
    margin-bottom: 40px;

    @media screen and (max-width: 375px) {
      max-width: 15rem;
      max-height: 15rem;
    }
  }

  @media screen and (max-width: 1000px) {
    max-width: 52rem;
  }

  @media screen and (max-width: 768px) {
    max-width: 38rem;
  }
  @media screen and (max-width: 375px) {
    /* max-width: 20rem; */
    max-height: 15rem;
  }
`;

export const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: center;
  margin: 0 0 1rem 0;

  @media screen and (min-width: 700px) {
    text-align: left;
  }

  @media screen and (max-width: 375px) {
    /* margin: 0; */
  }
`;

export const ContactListItem = styled.li`
  font-size: 1.5rem;
`;

export const ContactBottomWrapper = styled.div`
  /* display: flex; */
`;

export const ContactH1 = styled.h1`
  font-size: 5em;
  color: #fff;
  margin-bottom: 64px;
  text-align: center;
  padding-top: 40px;
`;

export const ContactH3 = styled.h3`
  font-size: 3em;
  color: #fff;
  margin-bottom: 64px;
  text-align: center;
  padding-top: 40px;
`;

export const ContactP = styled.p`
  /* margin: 20px 0; */
  /* width: 60rem; */
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

export const ContactRow = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 375px) {
    flex-direction: column;
  } ;
`;

export const ContactLabel = styled.label`
  color: #fff;
  display: block;
  padding-bottom: 0.5em;
`;

export const ContactInput = styled.input`
  color: #fff;
  max-width: 100%;
  padding: 1em;
  margin-bottom: 2em;
  background-color: rgb(8, 10, 22);
  border-radius: 5px;
`;

export const ContactMsg = styled.div`
  margin-top: 2.5rem;
  width: 200px;
`;

export const ContactBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContactForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  column-gap: 60px;
  padding: 2em 0;
  /* margin-left: 2em; */

  .full {
    grid-column: 1 / 3;
  }

  @media screen and (max-width: 700px) {
    padding: 1em;
    column-gap: 20px;
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 375px) {
  }
`;

export const ContactButton = styled.button`
  max-width: 100%;
  /* width: 96.8%; */
  /* width: 100rem; */
  padding: 1em;
  margin: 2rem 0;
  background: linear-gradient(to bottom right, #870000, #190a05);
  color: #f9f9f9;
  /* background: #c9e6ff; */

  border: 0;
  text-transform: uppercase;

  :hover,
  :hover {
    /* background: #92bde7; */
    background: #bf0303; /* Old browsers */
    background: -moz-linear-gradient(
      top,
      #bf0303 0%,
      #ae0202 45%,
      #9a0000 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      top,
      #bf0303 0%,
      #ae0202 45%,
      #9a0000 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to bottom,
      #bf0303 0%,
      #ae0202 45%,
      #9a0000 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#bf0303', endColorstr='#9a0000',GradientType=0 ); /* IE6-9 */

    color: #fff;
    transition: background-color 2s ease-out;

    // ADD Media queries indivindually for button 1000px,768px,

    @media screen and (max-width: 1000px) {
    }

    @media screen and (max-width: 700px) {
    }
    @media screen and (max-width: 375px) {
    }
  }
`;

export const ContactText = styled.textarea`
  max-width: 100%;
  padding: 1em;
  min-height: 300px;
  background-color: rgb(8, 10, 22);
  border-radius: 5px;
  color: #fff;

  @media screen and (max-width: 1000px) {
  }

  @media screen and (max-width: 700px) {
  }
  @media screen and (max-width: 375px) {
  } ;
`;
