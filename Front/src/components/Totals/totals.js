import React, { useContext, useState, useEffect } from "react";
import { BudgetContext } from "../../budgetContext";
import styled from "styled-components";

import EachTotal from "./EachTotal";

const Totals = () => {
  const { incomeState, expenseState, savingsState } = useContext(BudgetContext);

  const [totalState, setTotalState] = useState(null);
  console.log(totalState);
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

    setTotalState([
      { id: "totalIncome", amount: totalIncomeAmt },
      { id: "totalExpense", amount: totalExpenseAmt },
      { id: "grandTotal", amount: grandTotalAmt },
      { id: "totalSavings", amount: totalSavingsAmt },
    ]);
  }, [incomeState, expenseState, savingsState]);

  return (
    <Wrapper>
      {totalState !== null &&
        totalState.map((item) => <EachTotal key={item.id} {...item} />)}
    </Wrapper>
  );
};

export default Totals;

const Wrapper = styled.div`

  background: red;
`;
