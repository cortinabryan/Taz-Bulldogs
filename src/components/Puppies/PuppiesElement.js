import styled from "styled-components";

export const PuppiesContainer = styled.div`
  height: 1000px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: rgb(181, 189, 200); Old browsers */
  background: #707070;
  @media screen and (max-width: 1000px) {
    height: 900px;
  }
  @media screen and (max-width: 768px) {
    height: 1250px;
  }

  @media screen and (max-width: 480px) {
    /* height: 2700px; */
  }
`;

export const PuppiesWrapper = styled.div`
  /* width: 1400px; */
  /* max-width: 100%; */
  width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 75px;
  /* padding: 0 50px; */
  /* padding: 0 25px; */
  /* transition: all 0.2s ease-in-out; */
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    max-width: 700px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    /* padding: 0 50px; */
    max-width: 300px;
  }
  /* @media screen and (max-width: 375px) {
    width: 200px;
  } */
`;

export const PuppiesCard = styled.div`
  background: #ffffff;
  /* color: #fff; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  /* max-height: 340px; */
  padding: 30px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-ease-in-out;
    /* cursor: pointer; */
    /* background: rgb(24, 26, 27); */
    background: linear-gradient(to bottom right, #536976, #292e49);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 1000px) {
    /* width: 100%; */
  }

  @media screen and (max-width: 768px) {
    /* width: 100px; */
  }
  /* @media screen and (max-width: 375px) {
    width: 200px;
  } */
`;

export const PuppiesIcon = styled.img`
  object-fit: cover;
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
  font-size: 4rem;
  color: #fff;
  margin-bottom: 64px;
  letter-spacing: 3px;
`;

export const PuppiesH2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const PuppiesP = styled.p`
  margin: 0;
  font-size: 1rem;
  text-align: center;
`;

export const PuppiesBtnWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
