import React, { createContext, useState, useReducer } from "react";

// Simply a higher up context. I dont see the need for reducers at this point

export const BudgetContext = createContext();

let initialIncomeState = [
  {
    name: "Net Salary",
    id: 0,
    frequency: null,
    amount: null,
  },
];

let initialExpenseState = [
  {
    name: "Cell Phone",
    id: 0,
    frequency: null,
    amount: null,
  },
];
const incomeReducer = (state, action) => {
  switch (action.type) {
    case "record-typing-income": {
      let copyArray = [...state];
      copyArray[action.index][action.fieldType] = action.value;

      return [...copyArray];
    }
    case "add-income-stream": {
      let copyArray = [...state];
      copyArray.push({
        name: action.labelState,
        id: action.counterIds,
        frequency: null,
        amount: null,
      });

      return [...copyArray];
    }
  }
};
const expenseReducer = (state, action) => {
  switch (action.type) {
    case "record-typing-expense": {
      let copyArray = [...state];
      copyArray[action.index][action.fieldType] = action.value;

      return [...copyArray];
    }
    case "add-expense-stream": {
      let copyArray = [...state];
      copyArray.push({
        name: action.labelState,
        id: action.counterIds,
        frequency: null,
        amount: null,
      });

      return [...copyArray];
    }
  }
};
export const BudgetProvider = ({ children }) => {
  const [incomeState, dispatchIncome] = useReducer(
    incomeReducer,
    initialIncomeState
  );
  const [expenseState, dispatchExpense] = useReducer(
    expenseReducer,
    initialExpenseState
  );

  const recordTypingIncome = React.useCallback(
    (data) => {
      dispatchIncome({ type: "record-typing-income", ...data });
    },
    [dispatchIncome]
  );

  const recordTypingExpense = React.useCallback(
    (data) => {
      dispatchExpense({ type: "record-typing-expense", ...data });
    },
    [dispatchExpense]
  );

  const addIncome = React.useCallback(
    (data) => {
      dispatchIncome({ type: "add-income-stream", ...data });
    },
    [dispatchIncome]
  );

  const addExpense = React.useCallback(
    (data) => {
      dispatchExpense({ type: "add-expense-stream", ...data });
    },
    [dispatchExpense]
  );

  
  console.log("INCOME STAAATE!!", incomeState);
  return (
    <BudgetContext.Provider
      value={{
        incomeState,
        expenseState,
        recordTypingIncome,
        recordTypingExpense,
        addIncome,
        addExpense,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
