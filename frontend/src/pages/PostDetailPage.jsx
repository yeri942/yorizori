import React from "react";
import styled from "styled-components";
import TopNav from "../Components/nav/TopNav";
import BottomNav from "../Components/nav/BottomNav";

const PostDetailPageBlock = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: blue;
`;

const PostDetailPage = () => {
  return (
    <PostDetailPageBlock>
      <TopNav />
      <div style={{ marginTop: "80px", marginBottom: "90px" }}>디테일한 내용이 들어갈것이다</div>
      <BottomNav />
    </PostDetailPageBlock>
  );
};

export default PostDetailPage;
