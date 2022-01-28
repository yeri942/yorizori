import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TopNavBox = styled.div`
  width: 100%;
  height: 70px;
  padding: 5px;
  border-bottom: 5px solid rgba(255,210,136, .46);
`

const TopBackBox = styled.img`
    color: #FCAD2C; 
    font-size: 24px;
    position: absolute;
    left: 12px;
    top: 3%;
`;


const TopNav = () => {
  return (
    <TopNavBox>
      <Link to="/">
          <TopBackBox src="../images/arrow.png" alt="arrow.png"></TopBackBox>
      </Link>
    </TopNavBox>
  )
};

export default TopNav;
