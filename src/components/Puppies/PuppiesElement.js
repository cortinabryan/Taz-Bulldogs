import styled from "styled-components";

export const PuppiesContainer = styled.div`
  height: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 1000px) {
    height: 1800px;
  }
  @media screen and (max-width: 768px) {
    height: 2700px;
  }

  @media screen and (max-width: 480px) {
    height: 2700px;
  }
`;

export const PuppiesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  /* padding: 0 25px; */
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const PuppiesCard = styled.div`
  background: rgb(24, 26, 27);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  /* max-height: 340px; */
  width: 250px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-ease-in-out;
    /* cursor: pointer; */
  }
`;

export const PuppiesIcon = styled.img`
  border-radius: 20px;
  height: 200px;
  width: 200px;
  margin-bottom: 10px;

  &:hover {
    transition: all 0.2s ease-in-out;
    border-radius: 80px;
  }
`;

export const PuppiesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
`;

export const PuppiesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const PuppiesP = styled.p`
  margin: 0;
  font-size: 1rem;
  text-align: center;
`;

export const PuppiesBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
