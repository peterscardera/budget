import React, { createContext, useReducer } from "react";

//incomeState and expenseState are passed to the cashFlow JS which is used twice. First by income.js then expense.js
export const BudgetContext = createContext();

//------------------- 3 INITIAL STATES------------ only exp and income fed to CashFlow.js
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

let initialSavingsState = [
  {
    name: "Savings Account",
    id: 0,
    amount: null,
  },
];

//------------------ 3 REDUCERS------------------
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
    case "remove-income-stream": {
      let copyArray = [...state];

      const newValues = copyArray.filter((item, i) => i !== action.index);

      return [...newValues];
    }
    default:
      return state;
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
    case "remove-expense-stream": {
      let copyArray = [...state];

      const newValues = copyArray.filter((item, i) => i !== action.index);

      return [...newValues];
    }
    default:
      return state;
  }
};

const savingsReducer = (state, action) => {
  switch (action.type) {
    case "record-typing-saving": {
      let copyArray = [...state];
      copyArray[action.index][action.fieldType] = action.value;

      return [...copyArray];
    }
    case "add-saving-stream": {
      let copyArray = [...state];
      copyArray.push({
        name: action.labelState,
        id: action.counterIds,
        amount: null,
      });

      return [...copyArray];
    }
    case "remove-saving-stream": {
      console.log(action, "HIT ACTIONS SAVINGS");
      let copyArray = [...state];

      const newValues = copyArray.filter((item, i) => i !== action.index);

      return [...newValues];
    }
    default:
      return state;
  }
};

//---------------------PROVIDER---------------------
export const BudgetProvider = ({ children }) => {
  const [incomeState, dispatchIncome] = useReducer(
    incomeReducer,
    initialIncomeState
  );
  const [expenseState, dispatchExpense] = useReducer(
    expenseReducer,
    initialExpenseState
  );

  const [savingsState, dispatchSavings] = useReducer(
    savingsReducer,
    initialSavingsState
  );
  // console.log(savingsState,'SAVINGS STATE IN REDUCER!')
  // console.log(expenseState,'expense STATE IN REDUCER!')

  // console.log(incomeState,'income STATE IN REDUCER!')

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

  const recordTypingSaving = React.useCallback(
    (data) => {
      dispatchSavings({ type: "record-typing-saving", ...data });
    },
    [dispatchSavings]
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
  const addSavings = React.useCallback(
    (data) => {
      dispatchSavings({ type: "add-saving-stream", ...data });
    },
    [dispatchSavings]
  );
  const removeIncome = React.useCallback(
    (data) => {
      dispatchIncome({ type: "remove-income-stream", ...data });
    },
    [dispatchIncome]
  );

  const removeExpense = React.useCallback(
    (data) => {
      dispatchExpense({ type: "remove-expense-stream", ...data });
    },
    [dispatchExpense]
  );

  const removeSavings = React.useCallback(
    (data) => {
      dispatchSavings({ type: "remove-saving-stream", ...data });
    },
    [dispatchSavings]
  );

  return (
    <BudgetContext.Provider
      value={{
        incomeState,
        expenseState,
        savingsState,
        recordTypingIncome,
        recordTypingExpense,
        recordTypingSaving,
        addIncome,
        addExpense,
        addSavings,
        removeIncome,
        removeExpense,
        removeSavings,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
