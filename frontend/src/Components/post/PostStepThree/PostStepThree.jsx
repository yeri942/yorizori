import React from "react";
import styled, { css } from "styled-components";
import PostTemplete from "../PostTemplete";
import { StyledP, ContainerDiv } from "../commonStyle";
import AddOrder from "./OrderForm/AddOrder";
import OrderList from "./OrderForm/OrderList";

const PostStepThreeBlock = styled.div``;

const PostStepThree = () => {
  return (
    <PostStepThreeBlock>
      <PostTemplete stepNum={3} page={3} request={"요리순서를 추가해 주세요."}>
        <ContainerDiv big>
          <OrderList></OrderList>
          <AddOrder></AddOrder>
        </ContainerDiv>
      </PostTemplete>
    </PostStepThreeBlock>
  );
};

export default PostStepThree;
