import React from "react";
import styled from "styled-components";
import Buttons from "../Components/viewAll/Buttons";
import Postzone from "../Components/viewAll/Postzone";
import TopNav_main from "../Components/nav/TopNav_main";
import BottomNav from "../Components/nav/BottomNav";
import Modal from "../Components/viewAll/Modal";
import { atom, useRecoilState } from "recoil";

const ViewAllPageBlock = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const buttonState = atom({
  key: "buttonState",
  default: false,
});

const ViewAllPage = () => {
  return (
    <ViewAllPageBlock>
      <Modal />
      <TopNav_main />
      <div style={{ marginTop: "80px", marginBottom: "90px" }}>
        <Buttons />
        <Postzone />
      </div>
      <BottomNav />
    </ViewAllPageBlock>
  );
};

export default ViewAllPage;
