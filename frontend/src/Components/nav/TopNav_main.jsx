import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TopNavMainBox = styled.div`
  width: 100%;
  height: 70px;
  padding: 5px;
  border-bottom: 5px solid rgba(255,210,136, .46);
`

const TopNavMainLogo = styled.img`
  width: 54px;
  left: 12px;
  top: 3%;
`
const TopNavMainInput = styled.input`
  position: relative;
  bottom: 10px;
  border: none;
  border-bottom: solid 1px;
  
`

const TopNavMain = () => {
  return (
    <TopNavMainBox>
      <Link to="/">
          <TopNavMainLogo src="../images/onlylogo.png" alt="arrow.png"></TopNavMainLogo>
      </Link>
      <TopNavMainInput></TopNavMainInput>
    </TopNavMainBox>
  )
};

export default TopNavMain;