import React, { useState } from "react";
import Icon1 from "../../images/puppy-3.jpg";
import Icon2 from "../../images/puppy-19.jpg";
import Icon3 from "../../images/puppy-8.jpg";
import { Button } from "../ButtonElements";
import {
  PuppiesContainer,
  PuppiesH1,
  PuppiesWrapper,
  PuppiesCard,
  PuppiesIcon,
  PuppiesH2,
  PuppiesP,
  PuppiesBtnWrapper,
} from "./PuppiesElement";

const Puppies = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <PuppiesContainer id="puppies">
        <PuppiesH1>Puppies</PuppiesH1>
        <PuppiesWrapper>
          <PuppiesCard>
            <PuppiesIcon src={Icon1}></PuppiesIcon>
            <PuppiesH2> Healthy & Chonky Puppers</PuppiesH2>
            <PuppiesP>get your healthy and chonkers rn</PuppiesP>
          </PuppiesCard>
          <PuppiesCard>
            <PuppiesIcon src={Icon2}></PuppiesIcon>
            <PuppiesH2> Healthy & Chonky Puppers</PuppiesH2>
            <PuppiesP>get your healthy and chonkers rn</PuppiesP>
          </PuppiesCard>
          <PuppiesCard>
            <PuppiesIcon src={Icon3}></PuppiesIcon>
            <PuppiesH2> Healthy & Chonky Puppers</PuppiesH2>
            <PuppiesP>get your healthy and chonkers rn</PuppiesP>
          </PuppiesCard>
        </PuppiesWrapper>
        <PuppiesBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Available Puppies
          </Button>
        </PuppiesBtnWrapper>
      </PuppiesContainer>
    </>
  );
};

export default Puppies;
