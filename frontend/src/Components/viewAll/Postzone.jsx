import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import { searchAtom } from "../nav/NavAtom";
import axios from "axios";
import {
  categoryAtom,
  materialAtom,
  conditionAtom,
  cookAtom,
  ViewAll,
} from "../../states/ViewAllAtom";

const Postzone = () => {
  const filteredData = useRecoilValue(searchAtom);
  const [page, setPage] = useState(1);
  const [recipes, setRecipes] = useRecoilState(ViewAll);

  const categoryFilter = useRecoilState(categoryAtom);
  const materialFilter = useRecoilState(materialAtom);
  const conditionFilter = useRecoilState(conditionAtom);
  const cookFilter = useRecoilState(cookAtom);

  console.log("레시피페이지 렌더링");
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      console.log("페이지 끝입니다.");
      setPage((prev) => prev + 1);
    }
  };

  const getRecipe = () => {
    try {
      const query = filteredData;
      const urlAll = `http://localhost:8080/post?startIndex=${page}&limit=10`;
      const urlSearch = `http://localhost:8080/post?recipeName=${query}`;

      let url;
      if (query) {
        url = urlSearch;
        const fetchData = async () => {
          const result = await axios(url);
          setRecipes(result.data);
          console.log(result.data);
        };
        fetchData();
      }
      if (
        !query &&
        !categoryFilter[0] &&
        !materialFilter[0] &&
        !conditionFilter[0] &&
        !cookFilter[0]
      ) {
        url = urlAll;
        const fetchData = async () => {
          const result = await axios(url);
          const resultrecipes = recipes.concat(result.data.limitedSortedPosts);
          setRecipes(resultrecipes);
        };
        fetchData();
      }
    } catch {
      console.error("에러");
    }
  };

  useEffect(() => {
    if (page <= (Math.ceil(recipes.length) + 10) / 10) {
      console.log("page?", page);
      getRecipe();
    }
  }, [page, filteredData]);

  const getCategoryRecipe = () => {
    try {
      const fetchData = async () => {
        if (!categoryFilter[0] && !materialFilter[0] && !conditionFilter[0] && !cookFilter[0])
          return;
        console.log(categoryFilter[0]);

        const category = categoryFilter[0];
        const material = materialFilter[0];
        const condition = conditionFilter[0];
        const cook = cookFilter[0];

        const categoryParams = category === "" ? "" : `&category=${category}`;
        const materialParams = material === "" ? "" : `&material=${material}`;

        const conditionParams = condition === "" ? "" : `&condition=${condition}`;
        const cookParams = cook === "" ? "" : `&cook=${cook}`;

        const url = `http://localhost:8080/post/withFilter?startIndex=${page}&limit=10${categoryParams}${materialParams}${conditionParams}${cookParams}`;

        const result = await axios(url);
        const resultrecipes = recipes.concat(result.data.userPosts);
        setRecipes(resultrecipes);
      };
      fetchData();
    } catch {
      console.error("에러");
    }
  };

  useEffect(() => {
    if (page <= (Math.ceil(recipes.length) + 10) / 10) {
      console.log("page?", page);
      getCategoryRecipe();
    }
  }, [page, categoryFilter[0], materialFilter[0], conditionFilter[0], cookFilter[0]]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(recipes);
  for (let i = 0; i < recipes.length; i++) {
    console.log(
      recipes[i].category,
      recipes[i].material,
      recipes[i].condition,
      recipes[i].cook,
      recipes[i].recipeName
    );
  }
  return (
    <Wrapper>
      <WrapperPost>
        {recipes.map((data, index) => {
          let recipeName = data.recipeName;
          let nickname = data.userId.nickName;
          if (recipeName.length > 20) {
            recipeName = recipeName.substring(0, 19) + "…";
          }
          return (
            <Link
              to={`/detail/${data._id}`}
              style={{ textDecoration: "none", color: "inherit" }}
              nickname={nickname}
              title={recipeName}
              key={index}
            >
              <div>
                <Img src={data.thumbnail} />
                <TextBox>
                  <Title>{recipeName}</Title>
                  <Author>{nickname}</Author>
                  <WrapperHeartComment>
                    <span className="sprite heart" />{" "}
                    <HeartCommentCount>{data.numLikes}</HeartCommentCount>
                    <span className="sprite comment" />{" "}
                    <HeartCommentCount>{data.numComments}</HeartCommentCount>
                  </WrapperHeartComment>
                </TextBox>
              </div>
            </Link>
          );
        })}
      </WrapperPost>
    </Wrapper>
  );
};
export default Postzone;

const Wrapper = styled.div`
  // overflow: scroll;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .sprite {
    display: inline-block;
    flex-shrink: 0;
    background-image: url(${process.env.PUBLIC_URL + "./images/icons.png"});
    background-repeat: no-repeat;
    background-size: 66.34px 30px;
  }
  .heart {
    width: 16px;
    height: 16px;
    background-position: -16px 3.8px;
  }
  .comment {
    width: 16px;
    height: 16px;
    background-position: -16px -13px;
  }
`;
const WrapperPost = styled.div`
  // overflow: scroll;
  display: grid;
  margin-top: 15px;
  grid: auto-flow 270px / repeat(2, 175px);
  justify-content: center;
  align-items: center;
  justify-items: center;
  & > div {
    width: 160px;
    height: 228px;
  }
`;
const Img = styled.img`
  width: 160px;
  height: 147px;
  border-radius: 10px;
  object-fit: cover;
`;
const TextBox = styled.div`
  width: 160px;
  height: 73px;
  margin-top: 8px;
  font-weight: 900;
  text-align: left;
`;
const Title = styled.p`
  font-size: 16px;
  margin: 0px;
`;
const Author = styled.p`
  font-size: 13px;
  margin: 5px 0 10px 0;
`;
const WrapperHeartComment = styled.div`
  line-height: 15px;
`;
const HeartCommentCount = styled.span`
  font-size: 13px;
  margin-right: 8px;
`;
