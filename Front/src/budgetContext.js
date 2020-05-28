import React, { createContext, useState, useReducer } from "react";

// Simply a higher up context. I dont see the need for reducers at this point

export const BudgetContext = createContext();

let initialIncomeState = [
  {
    name: "Net Salary",
    id: 0,
    frequency: "null",
    amount: 0,
  },
];

let initialExpenseState = [
    {
      name: "Cell Phone",
      id: 0,
      frequency: "null",
      amount: 0,
    },
      
  ];
const incomeReducer = (state, action) => {
  console.log(action)
    switch (action.type) {
      case "record-typing-income": {
        return {
          ...state,
          ...state[action.index][action.fieldType] = parseInt(action.value)
        };
      }
      case "cancel": {
        return {
        //   ...state,
        //   status: "idle",
        //   selectedSeatId: null,
        //   price: null
        };
      }
    
    }
  };
  const expenseReducer = (state, action) => {
    console.log(action)
    switch (action.type) {
      case "record-typing-expense": {
        return {
          ...state,
          ...state[action.index][action.fieldType] = parseInt(action.value)
        };
      }
      case "cancel": {
        return {
        //   ...state,
        //   status: "idle",
        //   selectedSeatId: null,
        //   price: null
        };
      }
    
    }
  };
  export const BudgetProvider = ({ children }) => {
    const [incomeState, dispatchIncome] = useReducer(incomeReducer, initialIncomeState)
    const [expenseState, dispatchExpense] = useReducer(expenseReducer, initialExpenseState)
    console.log(incomeState,'incomeState')

  const recordTypingIncome = React.useCallback((data)=>{
   
    dispatchIncome({type: "record-typing-income",...data})
  },[dispatchIncome])

  const recordTypingExpense = React.useCallback((data)=>{
    dispatchExpense({type: "record-typing-expense",...data})
  },[dispatchExpense])
console.log(incomeState,'NEW STATE')
  return (
    <BudgetContext.Provider
      value={{
       incomeState,
       expenseState,
       recordTypingIncome,
       recordTypingExpense,


      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
