import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TopNav from "../nav/TopNav";
import Comment from "./Comment";
import ReplyComment from "./ReplyComment";

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

function MoreComments() {
  const url = "http://localhost:8080/comment";
  const [myComments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    // 원래 useEffect안에는 async-await을 사용하지 못하지만
    // 즉시실행함수로 함수를 만든 후 실행함으로써 해결할 수 있음
    // async를 useEffect에 그대로 전달하면 구조상 프로미스를 반환할 수 밖에 없고, 이펙트 함수에는 클린업 함수를 리턴해야한다는데
    // 리액트가 받는건 덜렁 프라미스로 대체된다고 합니다.
    (async () => {
      const url = "http://localhost:8080";
      const postId = "61f61970198538e03c2b75a9";
      // ✔️추후에 삭제해야 될 postId
      const { comments } = await fetch(`${url}/comment/${postId}/detail`).then((res) => res.json());
      setComments(myComments.concat(comments));
      setIsLoading(false);
    })();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!newComment) {
      alert("댓글을 입력해주세요!");
      return;
    }
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postId: "61f61970198538e03c2b75a9",
        userId: "61f619dec8eb6ca33d73bbc2",
        comment: newComment,
      }),
    }).then((res) => {
      console.log(res);
    });
    setNewComment("");
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
          myComments.map(
            (comment, index) =>
              !comment.parentComment && (
                <>
                  <Comment key={comment._id} comment={{ ...comment }} isMore={true} />
                  <ReplyComment
                    key={comment._id + index}
                    commentList={myComments}
                    parentCommentId={comment._id}
                  />
                </>
              )
          )}
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

export default MoreComments;
