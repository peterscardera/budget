import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import Income from "../income";
import Expenses from "../expenses";
import Savings from "../savings";
import Totals from "../Totals";
//budget is the parent component of income and expenses who each reuse the cashFlow.js component

const Budget = () => {
  return (
    <>
      <h1>Budget Planner</h1>

      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Income></Income>
          <Expenses></Expenses>
          <Savings></Savings>
          <Totals></Totals>
        </Wrapper>
      </ThemeProvider>
    </>
  );
};

export default Budget;

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 700px;
  height: auto;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.25);
  background: white;
`;

const theme = {
  blue: "#335075",
  lightBlue: "#69819D",
  grey: "#3A3A3A",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  // maxWidth: "1000px",
};

const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
    background:#eee
   
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.3rem;
     font-family: 'Noto Sans JP', sans-serif;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  button {  font-family: 'radnika_next'; }
`;
