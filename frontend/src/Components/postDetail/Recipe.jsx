import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";

const padNumber = (num, length) => {
  return String(num).padStart(length, "0");
};

const RecipeWrapper = styled.div`
  margin: 20px;
`;
const Step = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;
const StepNumber = styled.div``;
const Content = styled.div`
  font-size: 14px;
  width: 150px;
  margin-bottom: 6px;
`;
const Img = styled.div`
  background-image: url("../images/gam.jpg");
  background-size: cover;
  width: 100px;
  height: 64px;
`;
const Timer = styled.div`
  display: flex;
  align-items: center;
`;
const ClockImg = styled.img`
  margin-right: 10px;
`;
const Recipe = (props) => {
  const [timerState, setTimerState] = useState(true);
  const tempMin = props.min ? parseInt(props.min) : 0;
  const tempSec = props.sec ? parseInt(props.sec) : 2;
  // 타이머를 초단위로 변환한 initialTime과 setInterval을 저장할 interval ref
  const initialTime = useRef(tempMin * 60 + tempSec);
  const interval = useRef(null);

  const [min, setMin] = useState(padNumber(tempMin, 2));
  const [sec, setSec] = useState(padNumber(tempSec, 2));

  const TimerStateToggle = () => {
    setTimerState(!timerState);
    console.log(timerState);
    if (timerState && initialTime.current > 0) {
      interval.current = setInterval(() => {
        initialTime.current -= 1;
        setSec(padNumber(initialTime.current % 60, 2));
        setMin(padNumber(parseInt(initialTime.current / 60), 2));
      }, 1000);
      return () => clearInterval(interval.current);
    }
  };

  // 초가 변할 때만 실행되는 useEffect
  // initialTime을 검사해서 0이 되면 interval을 멈춘다.
  useEffect(() => {
    if (initialTime.current <= 0) {
      clearInterval(interval.current);
    }
  }, [sec]);

  return (
    <RecipeWrapper>
      <div style={{ fontWeight: 900 }}>요리 순서</div>
      <Step>
        <StepNumber>1</StepNumber>
        <div>
          <Content>계란을 크게크게 볶는다.</Content>
          <Timer onClick={TimerStateToggle}>
            <ClockImg src="../images/clock.png" />
            {min}:{sec}
          </Timer>
        </div>
        <Img />
      </Step>
      <Step>
        <StepNumber>2</StepNumber>
        <div>
          <Content>잘 볶아진 계란과 인사를 나눕니다</Content>
          <Timer onClick={TimerStateToggle}>
            <ClockImg src="../images/clock.png" />
            {min}:{sec}
          </Timer>
        </div>
        <Img />
      </Step>
    </RecipeWrapper>
  );
};
export default Recipe;
