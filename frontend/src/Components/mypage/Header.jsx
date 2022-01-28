import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NavBottom from "../nav/BottomNav"
import NavTop from "../nav/TopNav"

const MyPageTemplate = () => {
  return (
    <>
      <NavTop />

      <NavBottom></NavBottom>
    </>
  
  );
};
export default MyPageTemplate;
