import React, { userRef, useState, useCallback, useMemo, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

const SloganWrapper = styled.div`
  width: 100%;
  height: 200px;
  z-index: 10;
  margin-top: 80px;
  position: relative;
`;

const SloganBackground = styled.div`
  position: relative;
  border-radius: 10px 0 0 10px;
  margin-left : 15px;
  height: 200px;
  background-color: #fffcf4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  right : 0
  z-index: 100;
`;

const SloganTitle = styled.div`
  background-image: url("../images/logo.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 220px;
  height: 80px;
  margin-right: 100px;
  margin-top: 40px;
  border: 0;

  z-index: 1000;
`;

const SloganBody = styled.p`
  height: 60px;
  font-size: 1.5rem;
  text-align: center;
  line-height: 60px;
  margin-botton: 40px;
  margin-top: 0;
  margin-left: 20px;
`;

const Slogan = () => {
  return (
    <SloganWrapper>
      <SloganBackground>
        <SloganTitle></SloganTitle>
        <SloganBody>직접 만드는 즐거움</SloganBody>
      </SloganBackground>
    </SloganWrapper>
  );
};

export default Slogan;
