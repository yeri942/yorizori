import React from "react";
import styled from "styled-components";
import PostTemplete from "../Components/post/PostTemplete";
import PostStepOne from "../Components/post/PostStepOne/PostStepOne";

const PostStepOnePageBlock = styled.div``;

const PostStepOnePage = () => {
  return (
    <PostStepOnePageBlock>
      <PostStepOne></PostStepOne>
    </PostStepOnePageBlock>
  );
};

export default PostStepOnePage;
