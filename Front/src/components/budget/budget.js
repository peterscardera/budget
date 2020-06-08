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
      <h1>Budget</h1>
      <h1>Results</h1>
      <GlobalStyle/>
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
  justify-content: space-around;
  width: 700px;
  height: 600px;
  background: pink;
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
