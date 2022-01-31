import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { SourceListAtom } from "../../PostAtom/PostAtom";
import { ResetTextarea } from "../../commonStyle";

const SourceList = () => {
  const [SourceList, setSourceList] = useRecoilState(SourceListAtom);
  const deleteIngredient = (index) => {
    setSourceList((oldList) => {
      const newList = oldList.filter(function (el, i) {
        return index !== i;
      });
      return newList;
    });
  };

  return (
    <>
      {SourceList.map((item, index) => {
        return (
          <Wrapper key={`wrapper_${index}`}>
            <Ingredient placeholder="ex) 간장" key={`ingredient_${index}`}></Ingredient>
            <Volume placeholder="한 큰술" key={`volume_${index}`}></Volume>
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

export default SourceList;

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
