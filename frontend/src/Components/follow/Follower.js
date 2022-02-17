import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import React from "react";
import BottomNav from "../nav/BottomNav";
import TopNav from "../nav/TopNav";

const MyFollower = () => {
  return (
    <div>
      <TopNav />
      <BottomNav />
    </div>
  )
}

export default MyFollower;