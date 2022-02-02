import React from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { pageStateAtom } from "../../states";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";

const BottomNav = ({ post }) => {
  const pageState = useRecoilValue(pageStateAtom);
  const navigate = useNavigate();

  return (
    <BottomNavBlock post={post}>
      <IconImg pageState={pageState} write onClick={() => navigate("/post")} />
      <IconImg pageState={pageState} home onClick={() => navigate("/")} />
      <IconImg pageState={pageState} recipe onClick={() => navigate("/view_all")} />
      <IconImg pageState={pageState} my onClick={() => navigate("/users/mypage")} />
    </BottomNavBlock>
  );
};

export default BottomNav;

const BottomNavBlock = styled.div`
  height: 80px;
  width: 100%;
  position: fixed;
  bottom: 0px;
  display: flex;
  /* flex-direction: row; */
  border-top: 1px solid #c5c5c5;
  background-color: white;
  justify-content: center;
`;

const IconImg = styled.div`
  width: 90px;
  background-image: url(../images/BottomIcon.png);

  ${(props) =>
    props.write &&
    css`
      background-position: -30px -15px;
    `}

  ${(props) =>
    props.home &&
    css`
      background-position: -111px -15px;
    `}

  ${(props) =>
    props.recipe &&
    css`
      background-position: -205px -15px;
    `}

  ${(props) =>
    props.my &&
    css`
      background-position: -294px -15px;
    `}

  ${(props) =>
    props.pageState === "post" &&
    props.write &&
    css`
      background-position: -30px 94px;
    `}
  
  ${(props) =>
    props.pageState === "viewAllPage" &&
    props.recipe &&
    css`
      background-position: -205px 94px;
    `}

  ${(props) =>
    props.pageState === "myPage" &&
    props.my &&
    css`
      background-position: -294px 94px;
    `}
  ${(props) =>
    props.pageState === "home" &&
    props.home &&
    css`
      background-position: -111px 94px;
    `}
`;
