import styled, { css } from "styled-components";

const StyledTitle = css`
  height: 60px;
  background: ${(props) => props.theme.blue};
  font-size: 1.4rem;
  font-weight: 900;
  letter-spacing: 0.9px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DefaultTitle = styled.div`
  ${StyledTitle}
`;
