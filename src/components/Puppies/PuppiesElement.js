import styled from "styled-components";

export const PuppiesContainer = styled.div`
  height: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(181, 189, 200); /* Old browsers */
  background: -moz-linear-gradient(
    top,
    rgba(181, 189, 200, 1) 0%,
    rgba(130, 140, 149, 1) 36%,
    rgba(40, 52, 59, 1) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    rgba(181, 189, 200, 1) 0%,
    rgba(130, 140, 149, 1) 36%,
    rgba(40, 52, 59, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    rgba(181, 189, 200, 1) 0%,
    rgba(130, 140, 149, 1) 36%,
    rgba(40, 52, 59, 1) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b5bdc8', endColorstr='#28343b',GradientType=0 ); /* IE6-9 */

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
  /* padding: 0 50px; */
  /* padding: 0 25px; */
  /* transition: all 0.2s ease-in-out; */
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const PuppiesCard = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  /* max-height: 340px; */
  width: 250px;
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
