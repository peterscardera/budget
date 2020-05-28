import React, { useState, useContext, useEffect } from "react";

//general styles
import formStyles from "../form.module.scss";

//MATERIAL UI selector
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { BudgetContext } from "../../budgetContext";

// REUSABLE FUNCTIONAL
let counterIds = 0;
const CashFlow = ({ defaultLabel, type, placeholderForNew }) => {
  const {
    incomeState,
    expenseState,
    recordTypingIncome,
    recordTypingExpense,
    addIncome,
    addExpense,
  } = useContext(BudgetContext);

  console.log(incomeState, "INSOMCE STATE ");
  console.log(expenseState, "EXPENSE STATEEEE");

  const [labelState, setLabelState] = useState("");
  const [currentMapState, setCurrentMapState] = useState(null);

  const [netCashState, setNetCashState] = useState([
    {
      name: defaultLabel,
      id: counterIds,
      frequency: "null",
      amount: "null",
    },
  ]);
  // console.log(netCashState, "TEEEEST");

  useEffect(() => {
    if (type === "income") {
      setCurrentMapState(incomeState);
    } else if (type === "expense") {
      setCurrentMapState(expenseState);
    }
  }, [incomeState, expenseState]);

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  //HANDLE INPUT CHANGES FOR NEW LABEL
  const handleLableInputChange = (e) => {
    setLabelState(e.target.value);
  };

  //HANDLE INPUT CHANGES EXISING STREAM
  const handleChange = (fieldType, index) => (e) => {
    e.preventDefault();
    let value = parseInt(e.target.value);

    if (type === "income") {
      recordTypingIncome({ fieldType, index, value });
    } else if (type === "expense") {
      recordTypingExpense({ fieldType, index, value });
    }
  };

  //HANDLE ADDING A NEW INCOME TYPE
  const addCashFlowTypeHandler = (e) => {
    e.preventDefault();
    counterIds++;

    if (type === "income") {
      addIncome({ labelState, counterIds });
    } else if (type === "expense") {
      addExpense({ labelState, counterIds });
    }

    setLabelState("");
  };

  //HANDLE REMOVING AN INCOME TYPE
  const removeNewCashFlowTypeHandler = (index) => (e) => {
    console.log(index, "INDEX DELETING");
    //copy of array of objects
    const newValues = netCashState.filter((item, i) => i !== index);

    //modifying specific value
    setNetCashState(newValues);
  };

  return (
    <>
      {currentMapState !== null &&
        currentMapState.map((item, index) => {
          return (
            <div key={`${item.id}`} className={formStyles.form}>
              {index > 0 ? (
                <button onClick={removeNewCashFlowTypeHandler(index)}>
                  remove
                </button>
              ) : (
                <div> ? </div>
              )}
              <FormControl className={classes.formControl}>
                <InputLabel
                  shrink
                  id="demo-simple-select-placeholder-label-label"
                >
                  {item.name}
                </InputLabel>
                <Select
                  displayEmpty={true}
                  name={item.name}
                  labelId={item.name}
                  id={`select-${index}`}
                  value={currentMapState[`${index}`].frequency}
                  onChange={handleChange("frequency", index)}
                >
                  {/* the value had to math the state freq value below (to have a default value placeholder) */}
                  <MenuItem selected disabled value={"null"}>
                    <em>Choose Freq. </em>
                  </MenuItem>
                  <MenuItem value={253}>Daily</MenuItem>
                  <MenuItem value={52}>Weekly</MenuItem>
                  <MenuItem value={26}>Bi-Weekly</MenuItem>
                  <MenuItem value={12}>Monthly</MenuItem>
                  <MenuItem value={4}>Quarterly</MenuItem>
                  <MenuItem value={3}>Every 6 months</MenuItem>
                  <MenuItem value={1}>Anually</MenuItem>
                </Select>
              </FormControl>
              <input
                required
                name={item.name}
                id={`input-${index}`}
                value={currentMapState[`${index}`].amount}
                onChange={handleChange("amount", index)}
                type="text"
                placeholder="0.00"
              />
            </div>
          );
        })}
      <form onSubmit={addCashFlowTypeHandler}>
        <label name="addLablel"></label>
        <input
          required
          name="addLabel"
          type="text"
          value={labelState}
          onChange={handleLableInputChange}
          placeholder={placeholderForNew}
        />
        <button type="submit"> Add </button>
      </form>
    </>
  );
};

export default CashFlow;

//notes: i have initial state for some key values as "null" instead of null
//VM6792 0.chunk.js:51577 Warning: `value` prop on `input` should not be null.
// Consider using an empty string to clear the component or `undefined` for uncontrolled components.
//https://github.com/facebook/react/issues/11417
