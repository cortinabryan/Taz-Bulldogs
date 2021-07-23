import React, { useState } from "react";
import Icon1 from "../../images/puppy-3.jpg";
import Icon2 from "../../images/puppy-19.jpg";
import Icon3 from "../../images/puppy-8.jpg";
import Icon4 from "../../images/puppy-13.jpg";
import Icon5 from "../../images/puppy-14.jpg";
import Icon6 from "../../images/puppy-6.jpg";
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
            <PuppiesH2> Dendi</PuppiesH2>
            <PuppiesP>Gender: Male</PuppiesP>
            <PuppiesP>Age: 8 weeks</PuppiesP>
          </PuppiesCard>
          <PuppiesCard>
            <PuppiesIcon src={Icon2}></PuppiesIcon>
            <PuppiesH2> Arteezy</PuppiesH2>
            <PuppiesP>Gender: Male</PuppiesP>
            <PuppiesP>Age: 10 weeks</PuppiesP>
          </PuppiesCard>
          <PuppiesCard>
            <PuppiesIcon src={Icon3}></PuppiesIcon>
            <PuppiesH2> Quinn</PuppiesH2>
            <PuppiesP>Gender: Female</PuppiesP>
            <PuppiesP>Age: 7 weeks</PuppiesP>
          </PuppiesCard>
          <PuppiesCard>
            <PuppiesIcon src={Icon4}></PuppiesIcon>
            <PuppiesH2> Topson</PuppiesH2>
            <PuppiesP>Gender: Female</PuppiesP>
            <PuppiesP>Age: 5 weeks</PuppiesP>
          </PuppiesCard>
          <PuppiesCard>
            <PuppiesIcon src={Icon5}></PuppiesIcon>
            <PuppiesH2> Sumail</PuppiesH2>
            <PuppiesP>Gender: Male</PuppiesP>
            <PuppiesP>Age: 6 weeks</PuppiesP>
          </PuppiesCard>
          <PuppiesCard>
            <PuppiesIcon src={Icon6}></PuppiesIcon>
            <PuppiesH2> Ceb</PuppiesH2>
            <PuppiesP>Gender: Female</PuppiesP>
            <PuppiesP>Age: 7 weeks</PuppiesP>
          </PuppiesCard>
        </PuppiesWrapper>
        <PuppiesBtnWrapper>
          <Button
            to="/available-puppies"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            More Available Puppies
          </Button>
        </PuppiesBtnWrapper>
      </PuppiesContainer>
    </>
  );
};

export default Puppies;
