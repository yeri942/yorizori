import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Watch } from "react-loader-spinner";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  detailedPostAtom,
  famousUsersPostsSelector,
  detailedUserAtom,
} from "../../states/homeAtom";
import { useRecoilState, useSetRecoilState, useRecoilValueLoadable } from "recoil";
import {
  ArticleWrapper,
  TextMainWrapper,
  TextWrapper,
  TextMain,
  LinkedText,
  ImageWithTag,
  StyledImage,
  TextBox,
  Title,
  Author,
  WrapperHeartComment,
  HeartCommentCount,
  Heart,
  Comment,
  Loading,
} from "./ariticleTemplateWithOneSlide";

const FamousUserPost = () => {
  const navigate = useNavigate();
  const setFamousPost = useSetRecoilState(detailedPostAtom);
  const [detailedUser, setDetailedUser] = useRecoilState(detailedUserAtom);

  const famousUsersPostsLoadable = useRecoilValueLoadable(famousUsersPostsSelector);

  const [changePosts, setChangePosts] = useState(0);

  if (famousUsersPostsLoadable.state === "loading") {
    return (
      <div>
        <Loading>
          <Watch ariaLabel="loading-indicator" color="#d45500" />
        </Loading>
      </div>
    );
  }

  const clickFamousPostHandler = (item) => {
    const postId = item._id;
    setFamousPost(item);
    navigate(`/detail/${postId}`);
  };

  const clickChangePostHandler = () => {
    setChangePosts((prev) => {
      console.log("prev", prev);
      if (prev === famousUsersPostsLoadable.contents.length - 1) return 0;

      return prev + 1;
    });
  };

  const clickDetailedUserHandler = (user) => {
    setDetailedUser(user);
    // console.log(detailedUser);
    navigate(`/users/mypage/${user._id}`);
    // navigate(`/users/mypage/`);
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <ArticleWrapper>
      <TextWrapper>
        <TextMainWrapper>
          <TextMain>많은 사랑을 받은 ,</TextMain>
          <TextMain>
            <span
              onClick={() =>
                clickDetailedUserHandler(famousUsersPostsLoadable.contents[changePosts][0]?.userId)
              }
            >
              {famousUsersPostsLoadable.contents[changePosts][0]?.userId.nickName}
            </span>{" "}
            님의 음식이에요.
          </TextMain>
        </TextMainWrapper>

        <LinkedText onClick={clickChangePostHandler}>다른 인기유저</LinkedText>
      </TextWrapper>
      <StyledSlider className="sliderrr" {...settings}>
        {famousUsersPostsLoadable.contents[changePosts].map((item, idx) => {
          return (
            <ImageWithTag className="doosan" key={item._id}>
              <StyledImage
                src={item.thumbnail}
                onClick={() => {
                  clickFamousPostHandler(item, idx);
                }}
              ></StyledImage>
              <TextBox>
                <Title>{item.recipeName}</Title>
                <Author>{item.userId.nickName}</Author>
                <WrapperHeartComment>
                  <Heart
                    className="sprite heart"
                    clicked={false}
                    onClick={() => alert("이제 하트해보자구")}
                  />
                  <HeartCommentCount>{item.numLikes}</HeartCommentCount>
                  <Comment className="sprite comment" />
                  <HeartCommentCount>{item.numComments}</HeartCommentCount>
                </WrapperHeartComment>
              </TextBox>
            </ImageWithTag>
          );
        })}
      </StyledSlider>
    </ArticleWrapper>
  );
};

export default FamousUserPost;

const StyledSlider = styled(Slider)`
  .slick-prev:before,
  .slick-next:before {
    color: #feae11;
    font-size: 20px;
  }
  .slick-dots li.slick-active button:before {
    color: #feae11;
  }
`;
