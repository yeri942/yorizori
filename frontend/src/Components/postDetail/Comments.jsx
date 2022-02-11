import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";
import moment from "moment";
import { Link } from "react-router-dom";
import Comment from "./Comment";
import ReplyComment from "./ReplyComment";

const CommentsWrapper = styled.div`
  margin: 0 20px;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  background-color: ${(props) => props.theme.mainColor};
  margin: 0 -20px;
  padding: 10px 20px;
  color: #fff;
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

const More = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
  font-size: 14px;
  text-align: center;
  padding: 15px 0;
  border-top: 1px solid lightgray;
  margin-top: 4px;
`;

const Comments = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  // const [comment, setComment] = useState("");

  useEffect(() => {
    // 원래 useEffect안에는 async-await을 사용하지 못하지만
    // 즉시실행함수로 함수를 만든 후 실행함으로써 해결할 수 있음
    // async를 useEffect에 그대로 전달하면 구조상 프로미스를 반환할 수 밖에 없고, 이펙트 함수에는 클린업 함수를 리턴해야한다는데
    // 리액트가 받는건 덜렁 프라미스로 대체된다고 합니다.
    (async () => {
      const url = "http://localhost:8080";
      const postId = "61f61970198538e03c2b75a9";
      // ✔️추후에 삭제해야 될 postId
      const data = await fetch(`${url}/comment/${postId}`).then((res) => res.json());
      setComments(data.comments);
      setIsLoading(false);
    })();
  }, []);

  // const commentChange = (event) => {
  //   setComment(event.target.value);
  // };
  // const commentSubmit = (e) => {
  //   e.preventDefault();
  //   if (comment === "") {
  //     // 빈댓글이면 바로 끝내버렴
  //     return;
  //   }
  //   // const nowTime = moment().format("YYYY-MM-DD HH:mm:ss");
  //   // name -> user의 nickName으로 변경해야함
  //   const newComment = { name: "두부", comment };
  //   setComments(comments.concat(newComment));
  //   // 바로 변경된 배열이 안나오는건 setState자체가 비동기로 동작하기때문
  //   console.log(comments);
  //   setComment("");
  // };

  return (
    <CommentsWrapper>
      <Title>댓글 (5)</Title>
      {!isLoading &&
        comments.map((comment) => (
          <>
            <Comment key={comment._id} comment={comment} isMore={false} />
          </>
        ))}
      <More to="./comments">댓글 더보기</More>
    </CommentsWrapper>
  );
};
export default Comments;

// {/* {isLogin && (
//   <CommentInputForm onSubmit={commentSubmit}>
//     <ProfileImg isImage={false} />
//     <Input
//       type="text"
//       placeholder="댓글을 작성해주세요 :3"
//       onChange={commentChange}
//       value={comment}
//     />
//     <InputButton type="submit">작성</InputButton>
//   </CommentInputForm>
// )} */}
