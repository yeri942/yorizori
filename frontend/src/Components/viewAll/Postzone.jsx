import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ReactLoading from "react-loading";
import { dropDownOptionsState } from "./ViewAllAtom";
import { useRecoilValue } from "recoil";
import { searchAtom } from "../nav/NavAtom";
import axios from "axios";

const baseURL = "http://localhost:8080";

const Postzone = () => {
  const filteredData = useRecoilValue(searchAtom);
  const [recipes, setRecipes] = useState([]);

  const [target, setTarget] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [countPost, setCountPost] = useState(4);

  const dropDownOptions = useRecoilValue(dropDownOptionsState);

  const getMoreItem = async () => {
    setIsLoaded(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setCountPost((countPost) => countPost + 4);
    setIsLoaded(false);
  };

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoaded) {
      observer.unobserve(entry.target);
      await getMoreItem();
      observer.observe(entry.target);
    }
  };
  //   // let observer;
  //   // if (target) {
  //   //   observer = new IntersectionObserver(onIntersect, {
  //   //     threshold: 0.4,
  //   //   });
  //   //   observer.observe(target);
  //   // }
  //   // return () => observer && observer.disconnect();
  // });
  useEffect(() => {
    const query = filteredData;
    const urlAll = "http://localhost:8080/post";
    const urlSearch = `http://localhost:8080/post/search?recipeName=${query}`;
    let url;
    url = filteredData === "" ? urlAll : urlSearch;

    const fetchData = async () => {
      const result = await axios(url);
      setRecipes(result.data);
    };
    fetchData();

    // let observer;
    // if (target) {
    //   observer = new IntersectionObserver(onIntersect, {
    //     threshold: 0.4,
    //   });
    //   observer.observe(target);
    // }
    // return () => observer && observer.disconnect();
  }, [filteredData]);

  return (
    <Wrapper>
      <WrapperPost>
        {recipes
          .filter((data) => {
            if (dropDownOptions.category === "") {
              return data.category;
            }
            return data.category === dropDownOptions.category;
          })
          .filter((data) => {
            if (dropDownOptions.material === "") {
              return data.material;
            }
            return data.material === dropDownOptions.material;
          })
          .filter((data) => {
            if (dropDownOptions.condition === "") {
              return data.condition;
            }
            return data.condition === dropDownOptions.condition;
          })
          .filter((data) => {
            if (dropDownOptions.cook === "") {
              return data.cook;
            }
            return data.cook === dropDownOptions.cook;
          })
          .map((data) => {
            let recipeName = data.recipeName;
            let nickname = data.userId.nickName;
            if (recipeName.length > 20) {
              recipeName = recipeName.substring(0, 19) + "…";
            }

            return (
              <Link
                to={`/detail/${data._id}`}
                style={{ textDecoration: "none", color: "inherit" }}
                nickname={data.userId.nickName}
                title={data.recipeName}
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

      <div ref={setTarget} className="Target-Element">
        {isLoaded && <ReactLoading type="bubbles" color="#feae11" height="40px" />}
      </div>
    </Wrapper>
  );
};
export default Postzone;

const Wrapper = styled.div`
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
