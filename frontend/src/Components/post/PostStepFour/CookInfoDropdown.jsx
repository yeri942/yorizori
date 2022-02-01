import React from "react";
import styled from "styled-components";
import { DropdownWrapper } from "../commonStyle";
import { Dropdown } from "react-dropdown-now";

const CookInfoDropdown = () => {
  return (
    <>
      <DropdownWrapper small>
        <Dropdown
          placeholder="인원"
          options={["1인분", "2인분", "3인분", "4인분", "5인분", "6인분이상"]}
          onSelect={(value) => {
            console.log("selected!", value);
          }}
        />
        <Dropdown
          placeholder="시간"
          options={["5분이내", "10분이내", "15분이내", "30분이내", "60분이내", "1시간이상"]}
        />
        <Dropdown placeholder="난이도" options={["아무나", "초급", "중급", "고급", "신의경지"]} />
      </DropdownWrapper>
    </>
  );
};

export default CookInfoDropdown;
