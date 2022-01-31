import React, { useState } from "react";
import styled from "styled-components";
import { AddBtn } from "../../commonStyle";

import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";

import { SourceListAtom } from "../../PostAtom/PostAtom";

const AddSource = () => {
  const setSourceList = useSetRecoilState(SourceListAtom);
  const addItem = (e) => {
    e.preventDefault();
    setSourceList((oldList) => {
      const newList = [
        ...oldList,
        {
          key: new Date().getTime(),
        },
      ];
      return newList;
    });
  };

  return <AddBtn onClick={addItem}>재료 추가</AddBtn>;
};

export default AddSource;
