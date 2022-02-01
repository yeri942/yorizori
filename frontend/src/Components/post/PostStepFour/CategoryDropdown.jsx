import React from "react";
import styled from "styled-components";
import { DropdownWrapper } from "../commonStyle";
import { Dropdown } from "react-dropdown-now";

const CategoryDropdown = () => {
  return (
    <>
      <DropdownWrapper>
        <Dropdown
          placeholder="종류"
          options={["한식", "중식", "일식", "아시안", "양식", "기타"]}
          onSelect={(value) => {
            console.log("selected!", value);
          }}
        />

        <Dropdown
          placeholder="재료"
          options={["육류", "채소류", "해물류", "과일류", "달걀/유제품", "기타"]}
        />
      </DropdownWrapper>
      <DropdownWrapper>
        <Dropdown
          placeholder="상황"
          options={[
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
        />
        <Dropdown
          placeholder="방법"
          options={["볶음", "무침", "비빔", "끓이기", "굽기", "삶기", "튀김", "기타"]}
          className="last"
        />
      </DropdownWrapper>
    </>
  );
};

export default CategoryDropdown;
