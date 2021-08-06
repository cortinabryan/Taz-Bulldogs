import styled from "styled-components";

export const ContactContainer = styled.div`
  background: #0c0c0c;
  font-family: "Poppins", sans-serif;
  margin-left: auto;
  margin-right: auto;
  padding: 1em;
`;

export const ContactWrapper = styled.div`
  margin: 20px;
  display: grid;
  grid-template-rows: 1fr 2fr;

  @media screen and (min-width: 700px) {
    /* display: grid;
    grid-template-columns: 1fr 2fr; */
  }

  @media screen and (min-width: 375px) {
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

export const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: center;
  margin: 0 0 1rem 0;

  @media screen and (min-width: 700px) {
    text-align: left;
  }
`;

export const ContactListItem = styled.li`
  font-size: 1.5rem;
`;

export const ContactBottomWrapper = styled.div``;

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
  margin: 0;
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
  width: 90%;
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
  padding: 2em;

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
  width: 100%;
  padding: 1em;
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
  }
`;

export const ContactText = styled.textarea`
  /* margin: 2.5rem 2rem 0 2rem; */
  /* padding: 1rem 2rem 2rem 1rem; */

  /* min-width: 61.5rem; */
  /* max-width: 65rem; */
  /* width: 61.5rem; */
  /* min-height: 300px; */
  /* font-size: 20px; */
  width: 95%;
  padding: 1em;
  min-height: 300px;
  background-color: rgb(8, 10, 22);
  border-radius: 5px;
  color: #fff;

  @media screen and (max-width: 1000px) {
    /* max-width: 52rem; */
  }

  @media screen and (max-width: 700px) {
    max-width: 90%;
  }
  @media screen and (max-width: 375px) {
    /* max-width: 20rem; */
  } ;
`;
