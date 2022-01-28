import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavHeaderBox = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  padding: 5px;
  justify-content: center;
  align-items: center;
  border-bottom: 5px solid rgba(255,210,136, .46);
`
const ArrowBackBox = styled.img`
    color: #FCAD2C; 
    font-size: 24px;
    position: absolute;
    left: 12px;
    top: 3%;
`;

const NavLogo = styled.img`
  text-align: center;
  width: 125px;
`;


const MyPageTemplate = () => {
  return (
    <NavHeaderBox>
      <Link to="/">
        <ArrowBackBox src="../images/arrow.png" alt="arrow.png"></ArrowBackBox>
      </Link>
      <Link to="/">
        <NavLogo src="../images/logo.png" alt="logo.png"></NavLogo>
      </Link>
    </NavHeaderBox>
  );
};
export default MyPageTemplate;
