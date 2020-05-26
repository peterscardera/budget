import React, { createContext, userReducer } from "react";

export const BudgetContext = createContext()

const INITIAL_STATE = {
    state:"Idle",
    totalIncome:null,
}

const totalReducer = (state, action) => {
    switch(action.type) {
        case "receive-income": {
            return {
                ...state,
                status: "loading",

            }
        }
    }
}

export const BudgetProvider = ({ children }) => {
    const [state, dispatch] = useReducer(totalReducer, INITIAL_STATE)



    
}