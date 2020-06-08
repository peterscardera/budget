import React from "react";
import { DefaultTitle } from "../reusable SC/title";

import CashFlow from "../ReusableStreamFunct";

const Income = () => {
  return (
    <>
      <DefaultTitle>Income </DefaultTitle>
      <CashFlow
        // defaultLabel="Net Salary"
        placeholderForNew="Income Type"
        type="income"
      ></CashFlow>
    </>
  );
};

export default Income;

