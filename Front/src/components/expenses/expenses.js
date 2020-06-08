import React from "react";
import { DefaultTitle } from "../reusable SC/title";
import CashFlow from "../ReusableStreamFunct";

const Expenses = () => {
  return (
    <>
      <DefaultTitle>Expenses </DefaultTitle>
      <CashFlow
        // defaultLabel="Cell phone"
        type="expense"
        placeholderForNew="Expense Type"
      ></CashFlow>
    </>
  );
};

export default Expenses;

