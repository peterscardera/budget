import React from "react";

import CashFlow from "../ReusableStreamFunct";

const Expenses = () => {
    return (
      <>
      Expenses
        <CashFlow
        defaultLabel="Credit Card"
        placeholderForNew ="Expense Type"
        ></CashFlow>
      </>
    );
  };
  
  export default Expenses;
  