import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";
import moment from "moment";

const CommentsWrapper = styled.div`
  margin: 0 20px;
`;
const CommentInputForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 17px 0;
`;
const Input = styled.input`
  padding: 10px 18px;
  width: 210px;
  height: 36px;
  border-radius: 14px;
  background-color: #eee;
  border: none;
  font-size: 12px;
`;

const InputButton = styled.button`
  font-size: 12px;
  height: 36px;
  width: 45px;
  margin-left: 10px;
  background-color: #feae11;
  border: none;
  border-radius: 13px;
  color: white;
`;
const Comment = styled.div`
  display: flex;
  align-items: center;
  margin: 18px 0;
`;
const ProfileImg = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  margin-right: 12px;
  object-fit: cover;
`;
const Nickname = styled.div`
  font-size: 14px;
  font-weight: 900;
`;
const CommenContent = styled.div`
  font-size: 13px;
`;
const Time = styled.div`
  font-size: 12px;
`;
const MoreComments = styled.div`
  font-size: 14px;
  text-align: center;
  padding: 15px 0;
  border-top: 1px solid lightgray;
`;
const Comments = () => {
  const [openReply, setOpenReply] = useState(false);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    // 원래 useEffect안에는 async-await을 사용하지 못하지만
    // 즉시실행함수로 함수를 만든 후 실행함으로써 해결할 수 있음
    // async를 useEffect에 그대로 전달하면 구조상 프로미스를 반환할 수 밖에 없고, 이펙트 함수에는 클린업 함수를 리턴해야한다는데
    // 리액트가 받는건 덜렁 프라미스로 대체된다고 합니다.
    (async () => {
      const url = "http://localhost:8080";
      const postId = "6200bb84ced083a6577874c0";
      // ✔️추후에 삭제해야 될 postId
      const data = await fetch(`${url}/comment/${postId}`).then((res) => res.json());
      setComments(data.comments);
      console.log(data);
    })();
  }, []);

  const commentChange = (event) => {
    setComment(event.target.value);
  };
  const commentSubmit = (e) => {
    e.preventDefault();
    // const nowTime = moment().format("YYYY-MM-DD HH:mm:ss");
    // name -> user의 nickName으로 변경해야함
    const newComment = { name: "두부", comment };
    setComments(comments.concat(newComment));
    // 바로 변경된 배열이 안나오는건 setState자체가 비동기로 동작하기때문
    console.log(comments);
    setComment("");
  };

  const onClickReplyOpen = () => {
    setOpenReply(!openReply);
    alert(openReply);
  };

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

  return (
    <CommentsWrapper>
      <CommentInputForm onSubmit={commentSubmit}>
        <ProfileImg src="../images/gam.jpg" />
        <Input
          type="text"
          placeholder="로그인 후 댓글을 작성 해주세요."
          onChange={commentChange}
          value={comment}
        />
        <InputButton type="submit">작성</InputButton>
      </CommentInputForm>
      {comments.map((comm) => {
        return (
          <Comment key={comm._id}>
            <ProfileImg src={comm.userId.profileImage ? comm.userId.profileImage : ""} />
            <div>
              <Nickname>{comm.userId.nickName}</Nickname>
              <CommenContent>{comm.comment}</CommenContent>
              <Time>{displayedAt(comm.createdAt)}</Time>
            </div>
          </Comment>
        );
      })}
      <MoreComments onClick={onClickReplyOpen}>댓글 더보기</MoreComments>
    </CommentsWrapper>
  );
};
export default Comments;
