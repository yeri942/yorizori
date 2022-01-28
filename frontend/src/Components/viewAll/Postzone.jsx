import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  text-align: center;
`;
const WrapperPost = styled.div`
  display: grid;
  margin-top: 15px;
  grid: auto-flow 250px / repeat(2, 175px);
  justify-content: center;
  align-items: center;
  justify-items: center;

  & > div {
    width: 160px;
    height: 228px;
  }
`;
const Img = styled.div`
  background-image: url("./images/gam.jpg");
  background-size: cover;
  width: 160px;
  height: 147px;
  border-radius: 10px;
`;
const TextBox = styled.div`
  width: 160px;
  height: 73px;
  margin-top: 8px;
  background-color: red;
  font-weight: 900;
  text-align: left;
`;
const Title = styled.p`
  font-size: 16px;
  margin: 0px;
`;
const Author = styled.p`
  font-size: 13px;
  margin-top: 8px;
`;
const Postzone = () => {
  return (
    <Wrapper>
      <WrapperPost>
        <div>
          <Img />
          <TextBox>
            <Title>바스바스감바스</Title>
            <Author>고래</Author>
          </TextBox>
        </div>
        <div>
          <Img />
        </div>
        <div>
          <Img />
        </div>
        <div>
          <Img />
        </div>
        <div>
          <Img />
        </div>
        <div>
          <Img />
        </div>
        <div>
          <Img />
        </div>
      </WrapperPost>
    </Wrapper>
  );
};
export default Postzone;
