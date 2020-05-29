import React from "react";

import CashFlow from "../ReusableStreamFunct";

const Income = () => {
  return (
    <>
    Income
      <CashFlow
      // defaultLabel="Net Salary"
      placeholderForNew ="Income Type"
      type="income"
      ></CashFlow>
    </>
  );
};

export default Income;
