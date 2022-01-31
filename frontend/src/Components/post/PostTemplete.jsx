import React, { Children } from "react";
import styled, { css } from "styled-components";
import PostNav from "../nav/PostNav";
import NavBottom from "../nav/BottomNav";
import { StyledP } from "./commonStyle";

const PostTempleteBlock = styled.form`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
`;

const StepDiv = styled.div`
  padding: 40px 20px 10px 30px;
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.5);
  width: 100vw;
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  width: 100vw;
  align-items: center;
`;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 100px;
  height: 100px;
`;

const PageBtn = styled.button`
  + button {
    margin-left: 3px;
  }
  margin-top: 40px;
  font-weight: 700;
  font-size: 1rem;
  background-color: white;
  border: none;
  color: ${(props) => {
    if (props.page === 1) {
      return "#FEAE11";
    }
    if (props.page === 2) {
      return "#FEAE11";
    }
    if (props.page === 3) {
      return "#FEAE11";
    }
    if (props.page === 4) {
      return "#FEAE11";
    }
  }};
`;

const PostTemplete = ({ children, stepNum }) => {
  return (
    <PostTempleteBlock>
      <PostNav />
      <StepDiv>STEP {stepNum}</StepDiv>
      <StyledP>레시피 제목을 입력해주세요.</StyledP>
      <ContentsWrapper>{children}</ContentsWrapper>

      <BtnWrapper>
        <PageBtn>[ 1 ]</PageBtn>
        <PageBtn>[ 2 ]</PageBtn>
        <PageBtn>[ 3 ]</PageBtn>
        <PageBtn>[ 4 ]</PageBtn>
      </BtnWrapper>
      <NavBottom />
    </PostTempleteBlock>
  );
};

export default PostTemplete;
