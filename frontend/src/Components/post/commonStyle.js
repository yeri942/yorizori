import styled, { css } from "styled-components";

export const StyledP = styled.p`
  padding-left: 30px;
  width: 100vw;
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 600;
  ${(props) =>
    props.stepOne &&
    css`
      padding-top: 20px;
    `}
  ${(props) =>
    props.stepFour &&
    css`
      padding-left: 24px;
      height: 11px;
    `}
    ${(props) =>
    props.temp &&
    css`
      margin-top: 0;
    `}
`;

export const StyledScroll = css`
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #e09f21;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
`;

export const ResetTextarea = css`
  resize: none;
  :focus {
    outline: none;
  }
`;

export const ContainerDiv = styled.div`
  width: 321px;
  overflow-y: ${(props) => (props.drop ? "visible" : "auto")};

  height: ${(props) => {
    if (props.big) {
      return "321px";
    }
    if (props.small) {
      return "80px";
    }
    return "147px";
  }};

  border: 1px solid #cfcfcf;
  box-sizing: border-box;
  border-radius: 14px;
  padding: 7px 29px 0px 15px;
  display: flex;
  flex-direction: column;
  ${StyledScroll};

  ${(props) =>
    props.drop &&
    css`
      padding: 7px 15px 0px 15px;
    `}
`;

export const AddBtn = styled.div`
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

export const DropdownWrapper = styled.div`
  display: flex;
  margin: 5px 0;
  justify-content: center;

  .rdn {
    position: relative;
  }

  .rdn-drop {
    position: absolute;
    top: 40px;
    left: 2px;
    z-index: 999;
  }

  .rdn-control {
    position: relative;
  }

  .rdn-control-arrow {
    width: 14px;
    height: 14px;
    /* border-top: 10px solid #feae11;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent; */
    background-image: url("../images/dropArrow.png");
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    top: 8px;
    right: 6px;
  }

  & > div {
    width: 132px;
    height: 55px;
    border: 2px solid #feae11;
    border-radius: 50px;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 900;
    text-align: center;
    padding-top: 14px;
    padding-right: 20px;
    &:not(:last-child) {
      margin-right: 11px;
    }
    & > div:not(:first-child) {
      background-color: white;
      width: 120px;
      z-index: 100;
      color: #feae11;
      /* transform: translateY(-5px) translateX(10px); */
      border-radius: 10px;
      border: 2px solid #feae11;
    }
    .last:not(:first-child) {
      /* transform: translateY(-5px) translateX(-60px); */
    }
    .situation:nth-child(2) > :nth-child(3) {
      font-size: 13px;
    }
  }

  ${(props) =>
    props.small &&
    css`
      & > div {
        width: 90px;
        font-size: 0.9rem;
      }

      .rdn-control-arrow {
        top: 8px;
        right: -5px;
        width: 10px;
      }
    `}
`;
