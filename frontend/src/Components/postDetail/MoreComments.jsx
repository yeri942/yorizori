import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TopNav from "../nav/TopNav";
import Comment from "./Comment";

const Wrapper = styled.div`
  padding: 55px 12px 0;
`;

function MoreComments() {
  const [page, setPage] = useState(1);
  const [myComments, setComments] = useState([]);
  useEffect(() => {
    // 원래 useEffect안에는 async-await을 사용하지 못하지만
    // 즉시실행함수로 함수를 만든 후 실행함으로써 해결할 수 있음
    // async를 useEffect에 그대로 전달하면 구조상 프로미스를 반환할 수 밖에 없고, 이펙트 함수에는 클린업 함수를 리턴해야한다는데
    // 리액트가 받는건 덜렁 프라미스로 대체된다고 합니다.
    (async () => {
      const url = "http://localhost:8080";
      const postId = "6200bb84ced083a6577874c0";
      // ✔️추후에 삭제해야 될 postId
      const { comments, currentPage, maxPage } = await fetch(
        `${url}/comment/${postId}/detail?page=${page}`
      ).then((res) => res.json());

      if (currentPage < maxPage) {
        setPage(currentPage + 1);
      }
      setComments((cur) => cur.concat(comments));
    })();
  }, []);

  return (
    <>
      <TopNav title="댓글" />
      <Wrapper>
        {myComments.map((comm) => (
          <Comment key={comm._id} comm={{ ...comm }} isMore={true} />
        ))}
      </Wrapper>
    </>
  );
}

export default MoreComments;
