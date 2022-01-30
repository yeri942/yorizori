import React from "react";
import styled from "styled-components";
import PostTemplete from "../PostTemplete";
import { StyledP } from "../commonStyle";
const PostStepOne = () => {
  const TitleInput = styled.input`
    width: 315px;
    height: 60px;
    border-radius: 50px;
    border: 1px solid #feae11;
    font-size: 1rem;
    font-weight: bold;
    padding-left: 24px;
  `;
  const ImgUploadLabel = styled.label`
    position: absolute;
    width: 26px;
    height: 28px;
    background-image: url("../images/bi_camera.png");
    bottom: 18px;
    left: 110px;
  `;

  const ImgUploadInput = styled.input`
    display: none;
  `;

  const PositionRelative = styled.div`
    position: relative;
  `;

  const StyledTextArea = styled.textarea`
    width: 315px;
    height: 159px;
    border: 1px solid #feae11;
    box-sizing: border-box;
    border-radius: 50px;
    padding: 50px 45px 0 45px;
    resize: none;
    font-size: 1rem;
    font-weight: bold;
    :focus {
      outline: none;
    }
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #e09f21;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track {
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 10px;
    }
  `;

  return (
    <PostTemplete stepNum={1} page={1}>
      <TitleInput placeholder="마늘 50개 들어간 알리오 올리오" />
      <PositionRelative>
        <ImgUploadLabel htmlFor="main_img" />
        <ImgUploadInput id="main_img" type="file" />
      </PositionRelative>
      <StyledP stepOne>간단한 레시피 소개를 해주세요.{<br />}(필수사항은 아닙니다.)</StyledP>
      <StyledTextArea placeholder="직접 백종원 선생님의 레시피를 참고하여 변형하였습니다. "></StyledTextArea>
    </PostTemplete>
  );
};

export default PostStepOne;
