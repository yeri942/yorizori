import React from "react";
import styled from "styled-components";
import { AddCookOrder } from "../PostStyle";
import { CookOrderState } from "./_Atom";
import { useRecoilValue, useSetRecoilState } from "recoil";

const AddOrder = () => {
  const setCookOrderList = useSetRecoilState(CookOrderState);
  const addItem = (e) => {
    e.preventDefault();
    setCookOrderList((oldList) => {
      const newList = [
        ...oldList,
        {
          key: new Date().getTime(),
        },
      ];
      return newList;
    });
  };
  return <AddCookOrder onClick={addItem}>재료추가</AddCookOrder>;
};

export default AddOrder;
