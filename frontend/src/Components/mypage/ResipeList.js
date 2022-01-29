import React, { useState, useEffect} from 'react'
import {MypageResipeBox} from "./ProfileStyle"
import styled, { css } from "styled-components";

const ResipeMenu1 = styled.div`
  span {
    font-size: 16px;
    margin-top: 4px;
    margin-left: 30px;
  }
`

export default function ResipeButton() {

  const [onResipe, setOnResipe] = useState(false)
  
  const changeResipe = () => {
    setOnResipe((onResipe) => {
      console.log(onResipe)
      return !onResipe
    })
  }

  return (
    <MypageResipeBox onClick={changeResipe}>
        <ResipeMenu1>
          <span>내가 작성한 레시피</span>
        </ResipeMenu1>
          <img src="../images/bottomBT.png" alt=""  style={{ marginRight: "20px"}}/>
    </MypageResipeBox>
  )
}