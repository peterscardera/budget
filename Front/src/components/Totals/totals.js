import React, { useContext, useState, useEffect} from "react";
import { BudgetContext } from "../../budgetContext";


const Totals = () => {

const { incomeState, expenseState, savingsState} = useContext(BudgetContext)

// const [ totalState, setTotalState ] = useState = ({} )
console.log(incomeState, "IN TOTALS")

useEffect(()=>{

    incomeState.map((item, i)=> {
        console.log(item,'in map', parseInt(item.amount)*item.frequency)
    })

})

return (
    <>
    <div>yo</div>
    </>
)

}

export default Totals