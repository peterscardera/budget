import React, { useState } from 'react';
import styled, { ThemeProvider, createGlobalStyle, DefaultTheme } from 'styled-components';


import Income from '../income';
import Expenses from '../expenses';
import Savings from '../savings';
import Totals from '../Totals';
import Visualization from '../d3/d3';
//!budget is the parent component of income and expenses who each use the cashFlow.js component

// StyleProps interface is for the styled comp. prop passed down in <StyledTab>
interface StyledProps {
    pageState: boolean;
}
const Budget: React.FC = () => {
    //true will show the budget and false the vizualization
    const [pageState, setPageState] = useState(true);

    const handleButton = (page: boolean) => {
        setPageState(page);
    };

    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <StyledHOne>Budget Planner</StyledHOne>
                <ButtonContainer>
                    <StyledTab pageState={pageState} onClick={() => handleButton(true)}>
                        Budget
                    </StyledTab>
                    <StyledTab pageState={pageState} onClick={() => handleButton(false)}>
                        Visualize
                    </StyledTab>
                </ButtonContainer>
                {pageState === true ? (
                    <Wrapper>
                        <Income></Income>
                        <Expenses></Expenses>
                        <Savings></Savings>
                        <Totals></Totals>
                    </Wrapper>
                ) : (
                    <Visualization></Visualization>
                )}
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

const theme: DefaultTheme = {
    fontFamily: 'Noto Sans JP',
    colors: {
        blue: '#335075',
        lightBlue: '#69819D',
        grey: '#3A3A3A',
        lightgrey: '#E1E1E1',
        offWhite: '#EDEDED',
        black: '#000000',
    },

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
    color: ${theme.colors.black};
  }
  button {  font-family: 'radnika_next'; }
`;

const StyledHOne = styled.h1`
    text-align: center;
    font-size: 2rem;
    color: ${(props) => props.theme.colors.grey};
`;

const ButtonContainer = styled.div`
    margin: 0 auto;
    width: 700px;
    /* background: red; */
    /* display: flex;
  justify-content: center; */
`;

const StyledTab = styled.button<StyledProps>`
    outline: none;
    cursor: pointer;
    border: none;
    height: 50px;
    width: 160px;
    margin-right: 5px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    font-size: 1.5rem;
    font-weight: 400;
    text-transform: uppercase;
    font-family: ${(props) => props.theme.fontFamily};
    padding-bottom: none;
    background: ${(props) =>
        props.children === 'Budget' && props.pageState === true
            ? props.theme.colors.blue
            : props.children === 'Visualize' && props.pageState === false
            ? props.theme.colors.blue
            : 'RGBA(51,80,117,0.65)'};
    color: white;
`;
