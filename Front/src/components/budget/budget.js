import React from "react";


import Income from "../income"
import Expenses from "../expenses"

//budget is the parent component of income and expenses who each reuse the cashFlow.js component

const Budget = () => {
  return (
    <>
      <h1>Budget</h1>
    
      <Income></Income>
      <Expenses></Expenses>
    </>
  );
};

export default Budget;
