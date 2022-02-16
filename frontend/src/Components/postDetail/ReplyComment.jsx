import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Comment from "./Comment";

function ReplyComment({ commentList, parentCommentId }) {
  const [childCommentNumber, setChildCommentNumber] = useState(0);
  const [openRelpyComments, setOpenReplyComments] = useState(false);

  useEffect(() => {
    let commentNumber = 0;
    commentList.map((comment) => {
      if (comment.parentComment === parentCommentId) {
        commentNumber += 1;
      }
    });
    setChildCommentNumber(commentNumber);
  }, [commentList]); // 전체 댓글 개수가 변할때마다 상황을 감지해서 useEffect의 함수를 실행한다.

  const renderReplyCommnet = (parentCommentId) =>
    commentList.map((comment, index) => (
      <>
        {comment.parentComment === parentCommentId && (
          <ReplyWrapper key={comment._id}>
            <Comment isMore={true} comment={comment} />
            <ReplyComment commentList={commentList} parentCommentId={comment._id} />
          </ReplyWrapper>
        )}
      </>
    ));

  const onHandleChange = () => {
    setOpenReplyComments(!openRelpyComments);
  };
  return (
    <>
      {childCommentNumber > 0 && !openRelpyComments && (
        <MoreWrapper onClick={onHandleChange}>대댓글 {childCommentNumber}개 더 보기...</MoreWrapper>
      )}
      {openRelpyComments && renderReplyCommnet(parentCommentId)}
    </>
  );
}

const ReplyWrapper = styled.div`
  margin-left: 10px;
`;

const MoreWrapper = styled.p`
  margin: 0;
  margin-top: 4px;
`;

export default ReplyComment;
