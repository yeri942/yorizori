import styled, { css } from "styled-components";

export const StyledP = styled.p`
  padding-left: 40px;
  width: 100vw;
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 600;
  ${(props) =>
    props.stepOne &&
    css`
      padding-top: 20px;
    `}
`;
