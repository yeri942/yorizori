import styled, { css } from "styled-components";

export const ContentTextWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const DeleteBtn = styled.div`
  color: #7777;
  right: 20px;
  top: 20px;
  position: absolute;
`;

export const ContentText = styled.textarea`
  font-size: 0.77rem;
  width: 100vw;
  height: 112px;
  padding: 24px 14px;
  border: none;
  box-sizing: border-box;
  background-color: white;
  :focus {
    outline: none;
  }
  ${(props) =>
    props.tip &&
    css`
      height: 81px;
      padding: 30px 0 30px 15px;
      font-size: 1rem;
    `}
  ${(props) =>
    props.tag &&
    css`
      height: 150px;
      padding: 8px 14px 40px 14px;
      font-size: 1rem;
    `}
  ${(props) =>
    props.half &&
    css`
      height: 61px;
      padding: 20px 14px 40px 14px;
      font-size: 1rem;
      border-bottom: 1px solid #1111;
      ::-webkit-scrollbar {
        display: none;
        width: 0 !important;
      }
    `}
`;

export const AddCookOrder = styled.div`
  width: 100vw;
  text-align: center;
  padding: 12px 0;
  font-weight: 600;
  ::before {
    content: "+";
    color: white;
    margin-right: 5px;
    padding: 0px 5px;
    background-color: #feae11;
    border-radius: 100px;
  }
`;

export const PostFormBlock = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const TitleBox = styled.div`
  width: 100vw;
  height: 55px;
  background-color: #feae11;
  color: white;
  font-size: 1rem;
  padding-left: 15px;
  box-sizing: border-box;
  ${(props) =>
    props.cookinfo &&
    css`
      display: flex;
    `}
`;

export const TitleInput = styled.input`
  font-size: 1rem;
  width: 100vw;
  padding: 30px 0px 30px 15px;
  border: none;
  background-color: white;
  :focus {
    outline: none;
  }
`;

export const TagInfo = styled.div`
  font-size: 0.77rem;
  width: 360px;
  height: 50px;
  padding: 18px 14px 44px 14px;
  border: none;
  box-sizing: border-box;
  background-color: white;
  border-bottom: 1px solid #1111;
`;

export const ImgBox = styled.div`
  width: 100vw;
  height: 242px;
  background-color: #c4c4c4;
  ${(props) =>
    props.small &&
    css`
      width: 76px;
      height: 76px;
    `}
`;

export const CookInfo = styled.div`
  width: 50vw;
  height: 61px;
  box-sizing: border-box;
  padding: 20px 0px 20px 10px;
  font-size: 1rem;
  font-weight: 400;
  font-family: Roboto;
  position: relative;
  border: 0.1px solid #1111;
`;

export const DropdownWrapper = styled.div`
  display: flex;
  .rdn {
    width: 50vw;
    height: 61px;
    box-sizing: border-box;
    padding: 20px 0px 20px 10px;
    font-size: 1rem;
    font-weight: 400;
    font-family: Roboto;
    position: relative;
  }
  .rdn-control-placeholder {
    padding-left: 8px;
  }

  .rdn-control {
    position: relative;
    display: flex;
  }

  .rdn-control-arrow {
    width: 0;
    height: 0;
    border-top: 10px solid #feae11;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    position: absolute;
    right: 10px;
    top: 7px;
  }

  .rdn-drop {
    margin-top: 10px;
    position: absolute;
    left: 10px;
    right: 40px;
    top: -50px;
    box-shadow: 5px 5px 5px #9999;
    z-index: 100;
  }

  .rdn-drop-menu-option {
    background-color: white;
    box-sizing: border-box;
    padding: 8px;
  }

  ${(props) =>
    props.cookinfo &&
    css`
      .rdn {
        border: 0.1px solid #1111;
      }
    `}
`;
