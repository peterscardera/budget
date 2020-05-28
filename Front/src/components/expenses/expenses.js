import React from "react";

import CashFlow from "../ReusableStreamFunct";

const Expenses = () => {
    return (
      <>
      Expenses
        <CashFlow
        defaultLabel="Cell phone"
        type="expense"
        placeholderForNew ="Expense Type"
        ></CashFlow>
      </>
    );
  };
  
  export default Expenses;
  