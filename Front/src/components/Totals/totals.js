import React, { useContext, useState, useEffect } from "react";
import { BudgetContext } from "../../budgetContext";

const Totals = () => {
  const { incomeState, expenseState, savingsState } = useContext(BudgetContext);

  // const [ totalState, setTotalState ] = useState = ({} )

  useEffect(() => {
    let totalIncome = incomeState
      .map((item, i) => {
        return parseInt(item.amount) * item.frequency;
      })
      .reduce((acc, currentVal) => {
        return acc + currentVal;
      });

    let totalExpense = expenseState
      .map((item, i) => {
        return parseInt(item.amount) * item.frequency;
      })
      .reduce((acc, currentVal) => {
        return acc + currentVal;
      });

    let totalSavings = savingsState
      .map((item, i) => {
        return parseInt(item.amount);
      })
      .reduce((acc, currentVal) => {
        return acc + currentVal;
      });
    console.log(totalIncome, totalExpense, totalSavings, "TOTALS TESY");
  }, [incomeState, expenseState, savingsState]);

  return (
    <>
      <div>yo</div>
    </>
  );
};

export default Totals;
