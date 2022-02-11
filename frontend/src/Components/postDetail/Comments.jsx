import React, { useState, useRef, useEffect, useMemo } from "react";
import styled from "styled-components";

import moment from "moment";
import { Link, useParams } from "react-router-dom";
import Comment, { ProfileImg } from "./Comment";
import ReplyComment from "./ReplyComment";
import axios from "axios";
import { authAtom } from "../../states";
import { useRecoilState, useRecoilValue } from "recoil";
import { commentAtom } from "../../states/comment";

const CommentsWrapper = styled.div`
  padding: 10px 12px 0;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  background-color: ${(props) => props.theme.mainColor};
  padding: 10px 20px;
  color: #fff;
`;

const Count = styled.span`
  margin-left: 4px;
  font-size: 16px;
  font-weight: normal;
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

const EmptyComment = styled.div`
  padding: 10px 0;
  color: #7f8fa6;
`;

const Comments = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useRecoilState(commentAtom);
  const commentLength = useMemo(() => comments.length, [comments]);
  const { postId } = useParams();
  const isLogin = useRecoilValue(authAtom);
  console.log(isLogin);

  // const [comment, setComment] = useState("");

  useEffect(() => {
    // 원래 useEffect안에는 async-await을 사용하지 못하지만
    // 즉시실행함수로 함수를 만든 후 실행함으로써 해결할 수 있음
    // async를 useEffect에 그대로 전달하면 구조상 프로미스를 반환할 수 밖에 없고, 이펙트 함수에는 클린업 함수를 리턴해야한다는데
    // 리액트가 받는건 덜렁 프라미스로 대체된다고 합니다.
    (async () => {
      const url = `/comment/${postId}/detail`;
      const { data } = await axios(`${url}`);
      setComments(data.comments);
      setIsLoading(false);
    })();
  }, []);

  console.log(commentLength)
  return (
    <>
      {!isLoading && (
        <>
          <Title>
            댓글 <Count>{commentLength}</Count>
          </Title>
          <form >
          {/* <ProfileImg isImage={isLogin ? comment.userId.profileImage : ""} /> */}
          </form>
          <CommentsWrapper>
            {comments.slice(0,3).map((comment) => (
              <Comment key={comment._id} comment={comment} isMore={false} />
            ))}
            {isLogin && (
              <form>
                <input type="text" placeholder="댓글을 작성해주세요 :3" />
                <button type="submit">작성</button>
              </form>
            )}
            {commentLength === 0 ? (
              <EmptyComment>아직 작성된 댓글이 없어요</EmptyComment>
            ) : commentLength > 3 ? (
              <More to="./comments">댓글 더보기</More>
            ) : null}
          </CommentsWrapper>
        </>
      )}
    </>
  );
};
export default Comments;
