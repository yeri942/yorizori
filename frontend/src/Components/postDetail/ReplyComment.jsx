import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Comment from "./Comment";

const ReplyWrapper = styled.div`
    margin-left: 10px;
    position: relative;
    &::before {
        content:"";
        position: absolute;
        background-color: #f5f6fa;
        top: -9px;
        bottom: -9px;
        left: -20px;
        right: -10px;
        z-index: -1;
    }
`

const MoreWrapper = styled.p`
    padding-top: 20px;
    padding-bottom: 5px;
    position: relative;
    &::before {
        content:"";
        position: absolute;
        background-color: #fff;
        top: 9px;
        bottom: -9px;
        left: -20px;
        right: -10px;
        z-index: -1;
    }
`

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
    commentList.map((comment) => (
      <>
        {comment.parentComment === parentCommentId && (
          <ReplyWrapper key={comment._id} >
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
      <div>
          {childCommentNumber > 0 && !openRelpyComments && (
              <MoreWrapper onClick={onHandleChange}>대댓글 {childCommentNumber}개 더 보기...</MoreWrapper>
          )}
          {openRelpyComments && renderReplyCommnet(parentCommentId)}
      </div>
  )
}

export default ReplyComment;
