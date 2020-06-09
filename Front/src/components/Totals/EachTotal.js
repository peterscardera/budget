import React from "react";
import styled from "styled-components";
//png incons
import expense from "../../cash.png";
import income from "../../income.png";
import savings from "../../savings.png";
import total from "../../fund.png";

const EachTotal = ({ id, amount }) => {
  return (
    <Wrapper>
      <div>
        {id === "totalExpense" ? (
          <StyledImg src={expense} />
        ) : id === "totalIncome" ? (
          <StyledImg src={income} />
        ) : id === "totalSavings" ? (
          <StyledImg src={savings} />
        ) : (
          id === "grandTotal" && <StyledImg src={total} />
        )}
      </div>
      <StyledAmt>{amount}</StyledAmt>
    </Wrapper>
  );
};

export default EachTotal;

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`;
const StyledImg = styled.img`
  height: 30px;
  width: 30px;
`;

const StyledAmt = styled.div`
  color: ${(props) =>
    props.children === 0 ? "black" : props.children >= 1 ? "green" : "red"};
`;
