import React, { userRef, useState, useCallback, useMemo, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

const SloganWrapper = styled.div`
  width: 100%;
  height: 150px;
  z-index: 10;
  position: relative;
`;

const SloganBackground = styled.div`
  position: relative;
  border-radius: 10px 0 0 10px;
  height: 150px;
  background-color: #fffcf4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  right : 0
  z-index: 100;
`;

const SloganBody = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #feae11;
  height: 30px;
  line-height: 30px;
  margin: 0;
`;
const SloganContents = styled.p`
  font-size: 0.8rem;
  color: #646464;
  height: 20px;
  line-height: 20px;
  padding: 0;
`;
const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  font-size: 15px;
  & > a:not(:first-child) {
    margin-left: 25px;
  }
`;
const Button = styled.span`
  color: #ffffff;
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  padding: 0;
  text-shadow: -1px 0 #feae11, 0 1px #feae11, 1px 0 #feae11, 0 -1px #feae11;
`;

const SloganBottom = () => {
  return (
    <SloganWrapper>
      <SloganBackground>
        <SloganBody>요리할 준비가 되셨나요?</SloganBody>
        <SloganContents>요리조리와 함께 행복한 요리를 지금 바로 시작해보세요</SloganContents>
        <Info>
          <Link to="/Login" style={{ textDecoration: "none" }}>
            <Button>로그인</Button>
          </Link>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <Button>회원가입</Button>
          </Link>
        </Info>
      </SloganBackground>
    </SloganWrapper>
  );
};

export default SloganBottom;
