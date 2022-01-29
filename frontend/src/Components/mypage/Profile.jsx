import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NavBottom from "../nav/BottomNav"
import NavTop from "../nav/TopNav"
import { MyPageMainBox, MyPageMainImgBox, MyPageMainBtnBox} from "./ProfileStyle"

const MyPageImage = styled.img`
  width: 115px;
  height: 115px;
  border-radius: 50%;
  background-image: url("../images/profile.png");
  background-size: cover;
  margin-top: 25px;

  + p {
    margin: 0;
    font-size: 18px;
  }
`

const MyPageMainProfileEdit = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 10px;
  background-color: #FEAE11;
  display: inline-block;
  margin-top: 10px;
  margin-right: 14px;
  outline: none;
  border: none;
  cursor: pointer;
  color: white;
`

const MyPageMainPasswordEdit = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 10px;
  background-color: #FEAE11;
  display: inline-block;
  outline: none;
  border: none;
  cursor: pointer;
  color: white;
`

const MyPageTemplate = () => {
  return (
    <div>
      <NavTop />
        <MyPageMainBox>
          <MyPageMainImgBox>
            <MyPageImage />
              <p>요리조리1234</p>
            <MyPageMainBtnBox>
              <MyPageMainProfileEdit type="button">비밀번호 변경</MyPageMainProfileEdit>

              <Link to="/users/edit">
                <MyPageMainPasswordEdit type="button">프로필 수정</MyPageMainPasswordEdit>
              </Link>

            </MyPageMainBtnBox>
          </MyPageMainImgBox>
        </MyPageMainBox>
      <NavBottom />
    </div>
  
  );
};
export default MyPageTemplate;
