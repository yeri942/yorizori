import React from "react";
import styled from "styled-components";
import TopNav from "../nav/TopNav";
import BottomNav from "../nav/BottomNav";
import Summary from "./Summary";
import Ingredient from "./Ingredient";
import Recipe from "./Recipe";
const PostDetailBlock = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  margin-top: 50px;
  margin-bottom: 90px;
`;
const Line = styled.div`
  width: 360px;
  height: 10px;
  background-color: rgba(0, 0, 0, 0.14);
`;
const PostDetail = () => {
  return (
    <PostDetailBlock>
      <TopNav />
      <Content>
        <Summary />
        <Line />
        <Ingredient />
        <Line />
        <Recipe />
      </Content>
      <BottomNav />
    </PostDetailBlock>
  );
};

export default PostDetail;
