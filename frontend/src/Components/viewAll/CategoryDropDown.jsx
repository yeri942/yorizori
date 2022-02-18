import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Dropdown } from "react-dropdown-now";
import { searchAtom } from "../nav/NavAtom";
import { useRecoilState } from "recoil";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import {
  dropDownOptionsState,
  categoryAtom,
  materialAtom,
  conditionAtom,
  cookAtom,
  ViewAll,
} from "../../states/ViewAllAtom";

const CategoryDropdown = () => {
  const dropDownOptions = useRecoilValue(dropDownOptionsState);
  const setDropDownOptions = useSetRecoilState(dropDownOptionsState);
  const [filterCategory, setFilterCategory] = useRecoilState(categoryAtom);
  const [filterMaterial, setFilterMaterial] = useRecoilState(materialAtom);
  const [filterCondition, setFilterCondition] = useRecoilState(conditionAtom);
  const [filterCook, setFilterCook] = useRecoilState(cookAtom);
  const resetSearchValue = useResetRecoilState(searchAtom);
  const [category, setCategoty] = useState([]);
  const [recipe, setRecipe] = useRecoilState(ViewAll);
  const resetView = useResetRecoilState(ViewAll);
  const resetCategory = useResetRecoilState(categoryAtom);
  const resetMaterial = useResetRecoilState(materialAtom);
  const resetCondition = useResetRecoilState(conditionAtom);
  const resetCook = useResetRecoilState(cookAtom);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const category = dropDownOptions.value;

  //     const url = `http://localhost:8080/post/withFilter?category=${category}`;
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setCategoty(data.category);
  //   };
  //   fetchData();
  // }, []);
  const handleFilterCategory = (e) => {
    resetView();
    resetSearchValue();
    resetMaterial();
    resetCondition();
    resetCook();
    setFilterCategory(e.value);
  };
  const handleFilterMaterial = (e) => {
    resetView();
    resetSearchValue();
    resetCategory();
    resetCondition();
    resetCook();
    setFilterMaterial(e.value);
  };
  const handleFilterCondition = (e) => {
    resetView();
    resetSearchValue();
    resetCategory();
    resetMaterial();
    resetCook();
    setFilterCondition(e.value);
  };
  const handleFilterCook = (e) => {
    resetView();
    resetSearchValue();
    resetCategory();
    resetMaterial();
    resetCondition();
    setFilterCondition(e.value);
  };

  return (
    <>
      <DropdownWrapper>
        <Dropdown
          placeholder="종류"
          options={["전체", "한식", "중식", "일식", "아시안", "양식", "기타"]}
          onChange={(e) => handleFilterCategory(e)}
          onSelect={(value) => {
            setDropDownOptions((dropDownValues) => ({
              ...dropDownValues,
              category: value.value === "전체" ? "" : value.value,
            }));
            console.log("dropDownOptions", dropDownOptions);
          }} // always fires once a selection happens even if there is no change
        />
        <Dropdown
          placeholder="재료"
          options={["전체", "육류", "채소류", "해물류", "과일류", "달걀/유제품", "기타"]}
          value="one"
          onChange={(e) => handleFilterMaterial(e)}
          onSelect={(value) => {
            setDropDownOptions((dropDownValues) => ({
              ...dropDownValues,
              material: value.value === "전체" ? "" : value.value,
            }));
          }} // always fires once a selection happens even if there is no change
        />
        <Dropdown
          placeholder="상황"
          options={[
            "전체",
            "파티",
            "주말에 혼먹",
            "근사하게",
            "다이어트",
            "영양식",
            "야식",
            "간식",
            "초스피드",
            "기타",
          ]}
          value="one"
          onChange={(e) => handleFilterCondition(e)}
          onSelect={(value) => {
            setDropDownOptions((dropDownValues) => ({
              ...dropDownValues,
              condition: value.value === "전체" ? "" : value.value,
            }));
          }} // always fires once a selection happens even if there is no change
        />
        <Dropdown
          placeholder="방법"
          options={["전체", "볶음", "무침", "비빔", "끓이기", "굽기", "삶기", "튀김", "기타"]}
          className="last"
          value="one"
          onChange={(e) => handleFilterCook(e)}
          onSelect={(value) => {
            setDropDownOptions((dropDownValues) => ({
              ...dropDownValues,
              cook: value.value === "전체" ? "" : value.value,
            }));
          }} // always fires once a selection happens even if there is no change
        />
      </DropdownWrapper>
      <Line />
    </>
  );
};

export default CategoryDropdown;

const ButtonWrapper = styled.div`
  margin: 12px 0px;
  & > button {
    width: 95px;
    height: 45px;
    color: white;
    border: 2px solid #feae11;
    border-radius: 50px;
    line-height: 36px;
    font-size: 16px;
    font-weight: 900;

    &:first-child {
      margin-right: 16px;
    }
  }
`;
const Line = styled.div`
  width: 360px;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.14);
`;
const DropdownWrapper = styled.div`
  display: flex;
  margin: 14px 0;
  justify-content: center;
  & > div {
    width: 76px;
    height: 36px;
    border: 2px solid #feae11;
    border-radius: 50px;
    line-height: 36px;
    font-size: 13px;
    font-weight: 900;
    color: #feae11;
    text-align: center;

    &:not(:last-child) {
      margin-right: 8px;
    }
    & > div:not(:first-child) {
      background-color: white;
      width: 120px;
      z-index: 100;
      color: #feae11;
      transform: translateY(-5px) translateX(10px);
      border-radius: 10px;
      border: 2px solid #feae11;
    }
    .last:not(:first-child) {
      transform: translateY(-5px) translateX(-60px);
    }
    .situation:nth-child(2) > :nth-child(3) {
      font-size: 13px;
    }
  }
`;
