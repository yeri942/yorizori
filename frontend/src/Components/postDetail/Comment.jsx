import React from "react";
import { useMatch } from "react-router";
import styled from "styled-components";
import ReplyComment from "./ReplyComment";

const ProfileImg = styled.img.attrs((props) => ({
  src: props.isImage ? props.isImage : "../images/onlylogo.png",
}))`
  width: 42px;
  height: 42px;
  margin-right: 12px;
  border-radius: 50%;
  object-fit: cover;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 4px;
  ${ProfileImg} {
    align-self: baseline;
    flex-shrink: 0;
  }
`;

const CommentWrapper = styled.div`
  flex-grow: 1;
`;

const Nickname = styled.div`
  font-size: 14px;
  font-weight: 900;
`;

const CommenContent = styled.div`
  margin-top: 4px;
  font-size: 13px;
  ${(props) =>
    props.isMore
      ? ""
      : `line-height: 17px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;`};
`;

const Time = styled.p`
  margin-top: 4px;
  font-size: 12px;
  margin-bottom: 0;
  color: #a5a8b1;
`;

const displayedAt = (createdAt) => {
  const milliSeconds = new Date().getTime() - new Date(createdAt).getTime();
  const seconds = milliSeconds / 1000;
  if (seconds < 60) return `방금 전`;
  const minutes = seconds / 60;
  if (minutes < 60) return `${Math.floor(minutes)}분 전`;
  const hours = minutes / 60;
  if (hours < 24) return `${Math.floor(hours)}시간 전`;
  const days = hours / 24;
  if (days < 7) return `${Math.floor(days)}일 전`;
  const weeks = days / 7;
  if (weeks < 5) return `${Math.floor(weeks)}주 전`;
  const months = days / 30;
  if (months < 12) return `${Math.floor(months)}개월 전`;
  const years = days / 365;
  return `${Math.floor(years)}년 전`;
};

function Comment({ comment, isMore }) {
  return (
    <Wrapper>
      <ProfileImg isImage={comment.userId.profileImage ? comment.userId.profileImage : ""} />
      <CommentWrapper>
        <Nickname>{comment.userId.nickName}</Nickname>
        <CommenContent isMore={isMore}>{comment.comment}</CommenContent>
        <Time>{displayedAt(comment.createdAt)}</Time>
      </CommentWrapper>
    </Wrapper>
  );
}

export default Comment;
