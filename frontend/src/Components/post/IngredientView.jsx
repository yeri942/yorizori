import React from "react";
import styled, { css } from "styled-components";

const IngredientViewBlock = styled.div``;

const ContentTextWrapper = styled.div`
  display: flex;
`;

const ContentText = styled.textarea`
  font-size: 0.77rem;
  width: 100vw;
  height: 112px;
  padding: 24px 14px;
  border: none;
  box-sizing: border-box;
  background-color: white;
  :focus {
    outline: none;
  }
  ${(props) =>
    props.tip &&
    css`
      height: 81px;
      padding: 30px 0 30px 15px;
      font-size: 1rem;
    `}
  ${(props) =>
    props.tag &&
    css`
      height: 150px;
      padding: 8px 14px 40px 14px;
      font-size: 1rem;
    `}
  ${(props) =>
    props.half &&
    css`
      height: 61px;
      padding: 20px 14px 40px 14px;
      font-size: 1rem;
      border-bottom: 1px solid #1111;
      ::-webkit-scrollbar {
        display: none;
        width: 0 !important;
      }
    `}
`;

const IngredientView = ({ ingredientList }) => {
  return (
    <div>
      {ingredientList.map((item, index) => {
        return (
          <ContentTextWrapper>
            <ContentText half placeholder="예) 소고기"></ContentText>
            <ContentText half placeholder="예) 300g"></ContentText>
          </ContentTextWrapper>
        );
      })}
    </div>
  );
};
export default IngredientView;
