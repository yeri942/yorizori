import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { userIdAtom } from "../../states";
import { commentAtom } from "../../states/comment";
import TopNav from "../nav/TopNav";
import Comment from "./Comment";
import ReplyComment from "./ReplyComment";
import { isLoadingAtom, messageAtom, postIdAtom, toastAtom } from "./toastAtom";

function MoreComments() {
  const [comments, setComments] = useRecoilState(commentAtom);
  console.log("It's more comments", comments);
  const isLogin = useRecoilValue(userIdAtom);
  const { postId } = useParams();
  const url = `/comment/${postId}/detail`;
  // const [myComments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useRecoilState(isLoadingAtom);
  const [newComment, setNewComment] = useState("");
  const [toastStatus, setToastStatus] = useRecoilState(toastAtom);
  const [toastMessage, setToastMessage] = useRecoilState(messageAtom);

  useEffect(() => {
    (async () => {
      const { data } = await axios(`${url}`);
      setComments(data.comments);
      setIsLoading(false);
    })();
    if (toastStatus) {
      setTimeout(() => setToastStatus(false), 1000);
    }
  }, [toastStatus, isLoading]);

  const submitHandler = (e) => {
    e.preventDefault();
    // if (!newComment) {
    //   alert("댓글을 입력해주세요!");
    //   return;
    // }
    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     postId: "61f61970198538e03c2b75a9",
    //     userId: "61f619dec8eb6ca33d73bbc2",
    //     comment: newComment,
    //   }),
    // }).then((res) => {
    //   console.log(res);
    // });
    // setNewComment("");
  };

  const changeHandler = ({ target: { value } }) => {
    setNewComment(value);
  };

  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      submitHandler(e);
    }
  };

  return (
    <>
      <TopNav title="댓글" />
      <Wrapper>
        {!isLoading &&
          comments.map((comment, index) => {
            const isAuth = comment.userId.id === isLogin;
            console.log(comment);
            return (
              !comment.parentComment && (
                <>
                  <Comment
                    key={comment._id}
                    comment={{ ...comment }}
                    isMore={true}
                    isAuth={isAuth}
                    postId={postId}
                  />
                  <ReplyComment
                    key={comment._id + index}
                    commentList={comments}
                    parentCommentId={comment._id}
                    postId={postId}
                  />
                </>
              )
            );
          })}
      </Wrapper>
      <MyForm onSubmit={submitHandler}>
        <input
          onKeyDown={onKeyPress}
          onChange={changeHandler}
          value={newComment}
          placeholder="댓글을 남겨주세요 😊"
          type="text"
        />
        <button>등록</button>
      </MyForm>
    </>
  );
}

const Wrapper = styled.div`
  padding: 55px 12px 53px;
`;

const MyForm = styled.form`
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  & > input {
    flex: 1;
    height: 38px;
    padding-left: 8px;
    border: none;
    border-top: 1px solid #dcdde1;
    &:focus {
      border: 1px solid #e1b12c;
    }
  }
  & > button {
    flex-basis: 50px;
    background-color: ${(props) => props.theme.mainColor};
    border: 1px solid #e1b12c;
  }
`;

export default MoreComments;
