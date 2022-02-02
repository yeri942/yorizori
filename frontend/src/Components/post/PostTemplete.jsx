import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import PostNav from "../nav/PostNav";
import NavBottom from "../nav/BottomNav";
import { StyledP } from "./commonStyle";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { SubImageStateAtom, MainImageStateAtom, pageStateAtom } from "./PostAtom/PostAtom";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

const PostTemplete = ({ children, stepNum, page, request }) => {
  const setPageState = useSetRecoilState(pageStateAtom);
  return (
    <PostTempleteBlock autocomplete="off">
      <PostNav />
      <StepDiv>STEP {stepNum}</StepDiv>
      <Pre>
        <StyledP temp>{request}</StyledP>
      </Pre>
      <ContentsWrapper>{children}</ContentsWrapper>

      <BtnWrapper page={page}>
        <PageBtn type="button" onClick={() => setPageState(1)}>
          [ 1 ]
        </PageBtn>
        <PageBtn type="button" onClick={() => setPageState(2)}>
          [ 2 ]
        </PageBtn>
        <PageBtn type="button" onClick={() => setPageState(3)}>
          [ 3 ]
        </PageBtn>
        <PageBtn type="button" onClick={() => setPageState(4)}>
          [ 4 ]
        </PageBtn>
      </BtnWrapper>
      <StyledBtn
        page={page}
        type="submit"
        onClick={() => {
          localStorage.clear();
        }}
      >
        작성 완료
      </StyledBtn>
      <NavBottom post={"post"} />
    </PostTempleteBlock>
  );
};

export default PostTemplete;

const Pre = styled.pre`
  margin: 0;
`;

const StyledBtn = styled.button`
  width: 315px;
  height: 58px;
  background: #fcad2c;
  border-radius: 50px;
  color: white;
  position: absolute;
  bottom: 100px;
  font-size: 1.1rem;
  font-weight: 550;
  border: none;
  display: none;
  ${(props) => {
    if (props.page === 4) {
      return css`
        display: block;
      `;
    }
  }}
`;

const PostTempleteBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
`;

const StepDiv = styled.div`
  padding: 35px 20px 10px 30px;
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
  button:nth-child(${(props) => props.page}) {
    color: #feae11;
  }
  ${(props) => {
    if (props.page === 4) {
      return css`
        position: absolute;
        bottom: 110px;
      `;
    }
  }}
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
`;
