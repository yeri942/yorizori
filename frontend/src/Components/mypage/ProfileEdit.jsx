import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NavBottom from "../nav/BottomNav"
import NavTop from "../nav/TopNav"

const EditMainBox = styled.div`
  
`
const EditMyPage = () => {
  return (
      <EditMainBox>
        <NavTop />
          g2
        <NavBottom />
      </EditMainBox>
  )
}

export default EditMyPage