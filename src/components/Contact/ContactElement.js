import styled from "styled-components";

export const ContactContainer = styled.div`
  background: #0c0c0c;
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 1000px;
  position: relative;
  z-index: 1;
`;

export const ContactWrapper = styled.div`
  z-index: 1;
  height: 1000px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const ContactH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  text-align: center;
`;

export const ContactRow = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContactInput = styled.input`
  padding: 2rem 2rem 2rem 1rem;
  margin: 0 2rem;
  height: 2rem;
  width: 30rem;
  font-size: 20px;
  margin-top: 1rem;
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

export const ContactText = styled.textarea`
  margin: 2.5rem 2rem 0 2rem;
  padding: 1rem 2rem 2rem 1rem;

  /* min-width: 61.5rem; */
  /* max-width: 65rem; */
  width: 61.5rem;
  min-height: 300px;
  font-size: 20px;
  background-color: rgb(8, 10, 22);
  border-radius: 5px;

  @media screen and (max-width: 1000px) {
    max-width: 52rem;
  }

  @media screen and (max-width: 768px) {
    max-width: 38rem;
  } ;
`;
