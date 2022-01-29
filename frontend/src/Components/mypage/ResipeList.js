import React, { useState, useEffect} from 'react'
import {MypageResipeBox} from "./ProfileStyle"
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const ResipeMenu1 = styled.div`
  span {
    font-size: 16px;
    margin-top: 4px;
    margin-left: 30px;
  }
`

const ResipeListBox = styled.div`
  width: 300px;
  position: relative;
  left: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;
  img {
    margin: 10px 25px 0px 25px;
    width: 100px;
    height: 100px;
    border-radius: 15px;
    
  }
  p {
    margin: 0px;
  }
`
const ResipeListItem = styled.div`

`

export default function ResipeButton(props) {
  const resipeMenu = ["내가 작성한 레시피", "좋아요 누른 레시피", "최근 확인한 레시피", "댓글 남긴 레시피"]
  const [onResipe, setOnResipe] = useState(false)
  
  const changeResipe = () => {
    setOnResipe((onResipe) => {
      console.log(onResipe)
      return !onResipe
    })
  }

  return (
    <>
      <MypageResipeBox onClick={changeResipe}>
          <ResipeMenu1>
            <span>{ resipeMenu[props.nums]}</span>
          </ResipeMenu1>
            <img src="../images/bottomBT.png" alt=""  style={{ marginRight: "20px"}}/>

      </MypageResipeBox>
          {
            onResipe 
            ? <ResipeListBox>
                <ResipeListItem>
                  <Link to="/">
                    <img src="../images/food1.jpg" alt=""/>
                  </Link>
                  <p>햄버거 레시피</p>
                </ResipeListItem>
                <ResipeListItem>
                  <Link to="/">
                    <img src="../images/food2.jpg" alt=""/>
                  </Link>
                  <p>고기 레시피</p>
                </ResipeListItem>
              </ResipeListBox> 
            : ""
          }
    </>
  )
}