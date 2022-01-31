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
  overflow-y: auto;

  height: ${(props) => {
    if (props.big) {
      return "321px";
    }
    if (props.small) {
      return "75px";
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
