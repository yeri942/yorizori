import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { IngredientsListAtom } from "../../PostAtom/PostAtom";
import { ResetTextarea } from "../../commonStyle";

const IngredientsList = () => {
  const [ingredientsList, setIngredientsList] = useRecoilState(IngredientsListAtom);
  const deleteIngredient = (index) => {
    setIngredientsList((oldList) => {
      const newList = oldList.filter(function (el, i) {
        return index !== i;
      });
      return newList;
    });
  };

  return (
    <>
      {ingredientsList.map((item, index) => {
        return (
          <Wrapper key={`wrapper_${index}`}>
            <Ingredient placeholder="ex) 우유" key={`ingredient_${index}`}></Ingredient>
            <Volume placeholder="200ml" key={`volume_${index}`}></Volume>
            <DeleteBtn
              key={`DeleteBtn_${index}`}
              onClick={() => {
                deleteIngredient(index);
              }}
            >
              x
            </DeleteBtn>
          </Wrapper>
        );
      })}
    </>
  );
};

export default IngredientsList;

const Wrapper = styled.div`
  display: flex;
  + div {
    margin-top: 10px;
  }
  position: relative;
`;

const DeleteBtn = styled.div`
  width: 10px;
  position: absolute;
  right: -20px;
  color: #6666;
`;

const Ingredient = styled.textarea`
  width: 166px;
  height: 59px;
  border: 1px solid #feae11;
  box-sizing: border-box;
  border-radius: 50px;
  padding: 19px 0px 0px 25px;
  font-size: 1rem;
  font-weight: bold;
  ${ResetTextarea};
`;

const Volume = styled.textarea`
  width: 107px;
  height: 59px;
  border: 1px solid #feae11;
  box-sizing: border-box;
  border-radius: 50px;
  padding: 19px 0px 0px 25px;
  font-size: 1rem;
  font-weight: bold;
  ${ResetTextarea}
  margin-left : 5px;
`;
