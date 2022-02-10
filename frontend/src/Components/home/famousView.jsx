import React, { userRef, useState, useCallback, useMemo, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { FamousPostsAtom } from "./homeAtom";
import axios from "axios";
import { useRecoilState } from "recoil";
// import { getFamousList } from "./homeAction";
import {
  ArticleWrapper,
  TextMainWrapper,
  TextWrapper,
  TextMain,
  LinkedText,
  ImageWarpper,
  ImageWithTag,
  StyledImage,
  TextBox,
  Title,
  Author,
  WrapperHeartComment,
  HeartCommentCount,
  Heart,
  Comment,
} from "./articleTemplate";

const FamoustViewRapper = styled.div``;

const FamousView = () => {
  const baseURL = "http://localhost:8080";
  const navigatge = useNavigate();
  const [famousLists, setFamousLists] = useRecoilState(FamousPostsAtom);
  const getFamousList = async (startIndex, limit) => {
    await axios({
      baseURL,
      method: "get",
      url: "/like/sortByLike",
      responseType: "json",
      params: {
        startIndex: startIndex,
        limit: limit,
      },
    }).then((res) => setFamousLists(res.data.limitedSortedPosts));
  };

  useEffect(() => {
    getFamousList(1, 4);
  }, []);

  return (
    <ArticleWrapper>
      <TextWrapper>
        <TextMainWrapper>
          <TextMain>지금 ,</TextMain>
          <TextMain>
            <span>인기</span> 있는 음식이에요.
          </TextMain>
        </TextMainWrapper>
        <Link to="/view_all" style={{ textDecoration: "none" }}>
          <LinkedText>구경할래요</LinkedText>
        </Link>
      </TextWrapper>
      <ImageWarpper className="iamge">
        {famousLists.map((item) => {
          return (
            <>
              <ImageWithTag key={item._id}>
                <StyledImage
                  src={item.thumbnail}
                  onClick={() => {
                    navigatge("/detail");
                  }}
                ></StyledImage>
                <TextBox>
                  <Title>{item.recipeName}</Title>
                  <Author>{item.userId.nickName}</Author>
                  <WrapperHeartComment>
                    <Heart className="sprite heart" clicked={false} onClick={() => alert("ds")} />{" "}
                    <HeartCommentCount>311</HeartCommentCount>
                    <span className="sprite comment" /> <HeartCommentCount>7</HeartCommentCount>
                  </WrapperHeartComment>
                </TextBox>
              </ImageWithTag>
            </>
          );
        })}
      </ImageWarpper>
    </ArticleWrapper>
  );
};

export default FamousView;
