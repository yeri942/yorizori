import React from "react";
import styled, { css } from "styled-components";

const IngredientViewBlock = styled.div``;

const ContentTextWrapper = styled.div`
  display: flex;
  position: relative;
`;

const DeleteBtn = styled.div`
  color: #7777;
  right: 20px;
  top: 20px;
  position: absolute;
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

const IngredientView = ({ ingredientList, onRemove }) => {
  return (
    <div>
      {ingredientList.map((item, index) => {
        return (
          <ContentTextWrapper key={`wrapper_${index}`}>
            <ContentText key={`ingredient_${index}`} half placeholder="예) 소고기"></ContentText>
            <ContentText
              key={`ingredient_weight_${index}`}
              half
              placeholder="예) 300g"
            ></ContentText>
            <DeleteBtn
              onClick={(event) => {
                onRemove(index);
              }}
              type="button"
            >
              x
            </DeleteBtn>
          </ContentTextWrapper>
        );
      })}
    </div>
  );
};
export default IngredientView;
