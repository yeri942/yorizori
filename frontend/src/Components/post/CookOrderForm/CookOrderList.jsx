import React from "react";
import styled from "styled-components";
import { CookOrderState } from "./_Atom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { ContentTextWrapper, DeleteBtn, ContentText, ImgBox } from "../PostStyle";
const CookOrderList = () => {
  const CookOrderList = useRecoilValue(CookOrderState);
  const setCookOrderList = useSetRecoilState(CookOrderState);
  const deleteCookOrder = (index) => {
    setCookOrderList((oldList) => {
      const newList = oldList.filter(function (el, i) {
        return index !== i;
      });
      return newList;
    });
  };

  const CookOrderWrappr = styled.div`
    display: flex;
    :focus {
      outline: none;
    }
  `;
  const TimeContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const TimeSetDiv = styled.input`
    border: none;
    padding-left: 14px;
  `;

  const OrderText = styled.textarea`
    font-size: 1rem;
    width: 100vw;
    height: 61px;
    padding: 24px 14px;
    border: none;
    box-sizing: border-box;
    background-color: white;
    :focus {
      outline: none;
    }
  `;

  return (
    <div>
      {CookOrderList.map((item, index) => {
        return (
          <CookOrderWrappr key={`wrapper_${index}`}>
            <div>1</div>
            <TimeContentWrapper>
              <OrderText
                key={`cookorder_${index}`}
                half
                placeholder="예) 소고기 기름기를 떼어내고 ... "
              ></OrderText>
              <TimeSetDiv key={`cookorder_time_${index}`} placeholder="00:00" />
            </TimeContentWrapper>
            <ImgBox
              key={`cookorder_weight_${index}`}
              small
              // placeholder="예) 300g"
            ></ImgBox>
            {index + 1 === CookOrderList.length && (
              <DeleteBtn
                onClick={(event) => {
                  deleteCookOrder(index);
                }}
                type="button"
              >
                x
              </DeleteBtn>
            )}
          </CookOrderWrappr>
        );
      })}
    </div>
  );
};

export default CookOrderList;
