import React, { useContext, useState, useEffect } from "react";
import { BudgetContext } from "../../budgetContext";
import styled from "styled-components";
import { DefaultTitle } from "../reusable SC/title";

//child component of mapped out totalState
import EachTotal from "./EachTotal";

const Totals = () => {
  const { incomeState, expenseState, savingsState } = useContext(BudgetContext);

  const [totalState, setTotalState] = useState(null);
  const [initialTimeFrame, setInitialTimeFrame] = useState("yearly");
  // console.log(totalState);

  useEffect(() => {
    // by multiplying it by its frequence im annualizing each one
    let totalIncomeAmt = incomeState
      .map((item, i) => {
        if (item.amount === null) {
          return 0;
        } else {
          return parseInt(item.amount) * item.frequency;
        }
      })
      .reduce((acc, currentVal) => {
        return acc + currentVal;
      });

    let totalExpenseAmt = expenseState
      .map((item, i) => {
        if (item.amount === null) {
          return 0;
        } else {
          return parseInt(item.amount) * item.frequency;
        }
      })
      .reduce((acc, currentVal) => {
        return acc + currentVal;
      });

    let totalSavingsAmt = savingsState
      .map((item, i) => {
        if (item.amount === null) {
          return 0;
        } else {
          return parseInt(item.amount);
        }
      })
      .reduce((acc, currentVal) => {
        return acc + currentVal;
      });
    let grandTotalAmt = totalIncomeAmt - totalExpenseAmt;

    if (initialTimeFrame === "yearly") {
      setTotalState([
        { id: "totalIncome", amount: totalIncomeAmt },
        { id: "totalExpense", amount: totalExpenseAmt },
        { id: "grandTotal", amount: grandTotalAmt },
        { id: "totalSavings", amount: totalSavingsAmt },
      ]);
    } else if (initialTimeFrame === "monthly") {
      setTotalState([
        { id: "totalIncome", amount: totalIncomeAmt/12 },
        { id: "totalExpense", amount: totalExpenseAmt/12 },
        { id: "grandTotal", amount: grandTotalAmt/12 },
        { id: "totalSavings", amount: totalSavingsAmt },
      ]);
    }



  }, [incomeState, expenseState, savingsState]);

  return (
    <Wrapper>
      <DefaultTitle>Totals</DefaultTitle>
      INSERT SELECTOR DEFAULT IS YEARLY 
      <Flex>
        {totalState !== null &&
          totalState.map((item) => <EachTotal key={item.id} {...item} />)}
      </Flex>
    </Wrapper>
  );
};

export default Totals;

const Wrapper = styled.div`
  height: 200px;
`;
const Flex = styled.div`
  display: flex;
  background: pink;
  width: 100%;
`;
