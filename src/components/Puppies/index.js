import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import Icon1 from "../../images/nena.jpg";
import Icon2 from "../../images/molly.jpg";
import Icon3 from "../../images/turbo.jpg";
import Icon4 from "../../images/thunder.jpg";
import Icon5 from "../../images/chapo2.jpg";
import Icon6 from "../../images/duke.jpg";
import Icon7 from "../../images/sky2.png";
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

  let history = useHistory();

  function handleClick() {
    history.push("/available-puppies");
  }

  return (
    <>
      <PuppiesContainer id="puppies">
        <PuppiesH1>Puppies</PuppiesH1>
        <PuppiesWrapper>
          <PuppiesCard>
            <PuppiesIcon src={Icon1}></PuppiesIcon>
            <PuppiesH2> Nena</PuppiesH2>
            <PuppiesP>Gender: Female</PuppiesP>
            <PuppiesP>Age: 9 weeks</PuppiesP>
          </PuppiesCard>
          <PuppiesCard>
            <PuppiesIcon src={Icon2}></PuppiesIcon>
            <PuppiesH2> Molly</PuppiesH2>
            <PuppiesP>Gender: Male</PuppiesP>
            <PuppiesP>Age: 10 weeks</PuppiesP>
          </PuppiesCard>
          <PuppiesCard>
            <PuppiesIcon src={Icon3}></PuppiesIcon>
            <PuppiesH2> Turbo</PuppiesH2>
            <PuppiesP>Gender: Female</PuppiesP>
            <PuppiesP>Age: 7 weeks</PuppiesP>
          </PuppiesCard>
          <PuppiesCard>
            <PuppiesIcon src={Icon4}></PuppiesIcon>
            <PuppiesH2> Thunder</PuppiesH2>
            <PuppiesP>Gender: Male</PuppiesP>
            <PuppiesP>Age: 9 weeks</PuppiesP>
          </PuppiesCard>
          <PuppiesCard>
            <PuppiesIcon src={Icon5}></PuppiesIcon>
            <PuppiesH2> Chapo</PuppiesH2>
            <PuppiesP>Gender: Male</PuppiesP>
            <PuppiesP>Age: 9 weeks</PuppiesP>
          </PuppiesCard>
          <PuppiesCard>
            <PuppiesIcon src={Icon6}></PuppiesIcon>
            <PuppiesH2>Duke</PuppiesH2>
            <PuppiesP>Gender: Female</PuppiesP>
            <PuppiesP>Age: 7 weeks</PuppiesP>
          </PuppiesCard>
          <PuppiesCard className="puppy-7">
            <PuppiesIcon src={Icon7}></PuppiesIcon>
            <PuppiesH2>Sky</PuppiesH2>
            <PuppiesP>Gender: Female</PuppiesP>
            <PuppiesP>Age: 7 weeks</PuppiesP>
          </PuppiesCard>
        </PuppiesWrapper>
        <PuppiesBtnWrapper>
          <Link to="available-puppies" className="button-link">
            <Button
              to="/"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
              onClick={handleClick}
              className="puppy-button"
            >
              Previous Available Puppies
            </Button>
          </Link>
        </PuppiesBtnWrapper>
      </PuppiesContainer>
    </>
  );
};

export default Puppies;
