import React from "react";
import styled from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";
const RecipeWrapper = styled.div`
  margin: 20px;
`;
const Step = styled.div``;
const StepNumber = styled.div``;
const Content = styled.div``;
const Img = styled.div`
  background-image: url("../images/gam.jpg");
  background-size: cover;
  width: 100px;
  height: 64px;
`;
const Timer = styled.div``;
const ClockImg = styled.img``;
const Recipe = () => {
  return (
    <RecipeWrapper>
      <div>요리 순서</div>
      <Step>
        <StepNumber>1</StepNumber>
        <Content>계란을 크게크게 볶는다.</Content>
        <Timer>
          <ClockImg src="../images/clock.png" />
          00:00
        </Timer>
        <Img />
      </Step>
    </RecipeWrapper>
  );
};
export default Recipe;
