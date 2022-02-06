import React, { useState, useRef } from "react";
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
const ProfileImg = styled.div`
  background-image: url("../images/gam.jpg");
  background-size: cover;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  margin-right: 12px;
`;
const Nickname = styled.div`
  font-size: 14px;
  font-weight: 900;
`;
const CommenContent = styled.div`
  font-size: 13px;
`;
const Date = styled.div`
  font-size: 12px;
`;
const MoreComments = styled.div`
  font-size: 14px;
  text-align: center;
  padding: 15px 0;
  border-top: 1px solid lightgray;
`;
const Comments = () => {
  const [comments, setComments] = useState([]);
  const [nowComment, setNowComment] = useState("");
  const nextId = useRef(0);
  const commentChange = (event) => {
    setNowComment(event.target.value);
  };
  const commentSubmit = () => {
    const nowTime = moment().format("YYYY-MM-DD HH:mm:ss");
    const newComment = { id: nextId.current, name: "두부", comment: nowComment, date: nowTime };
    setComments(comments.concat(newComment));
    console.log(comments);
    nextId.current += 1;
    setNowComment("");
  };
  return (
    <CommentsWrapper>
      <CommentInputForm>
        <ProfileImg />
        <Input
          type="text"
          placeholder="로그인 후 댓글을 작성 해주세요."
          onChange={commentChange}
          value={nowComment}
        />
        <InputButton type="button" onClick={commentSubmit}>
          작성
        </InputButton>
      </CommentInputForm>
      {comments.map((comments) => {
        return (
          <Comment key={comments.id}>
            <ProfileImg />
            <div>
              <Nickname>{comments.name}</Nickname>
              <CommenContent>{comments.comment}</CommenContent>
              <Date>{comments.date}</Date>
            </div>
          </Comment>
        );
      })}
      <MoreComments>댓글 더보기</MoreComments>
    </CommentsWrapper>
  );
};
export default Comments;
