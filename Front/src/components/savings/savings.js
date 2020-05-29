import React, { useContext, useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";

import { BudgetContext } from "../../budgetContext";

let counterIds = 3;
const Savings = () => {
  const [labelState, setLabelState] = useState("");
  const {
    savingsState,
    recordTypingSaving,
    addSavings,
    removeSavings,
  } = useContext(BudgetContext);
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: "25ch",
    },
  }));
  const classes = useStyles();
  //HANDLE INPUT CHANGES FOR NEW LABEL
  const handleLableInputChange = (e) => {
    setLabelState(e.target.value);
  };

  //ADD SAVINGS
  const addCashFlowTypeHandler = (e) => {
    e.preventDefault();
    counterIds++;

    addSavings({ labelState, counterIds });

    setLabelState("");
  };
  //REMOVE SAVINGS
  const removeNewCashFlowTypeHandler = (index) => (e) => {
    removeSavings({ index });
  };

  //RECORD TYPING
  const handleChange = (fieldType, index) => (e) => {
    e.preventDefault();
    let value = parseInt(e.target.value);
    recordTypingSaving({ value, fieldType, index });
  };

  return (
    <>
      <div>Savings</div>
      {savingsState.map((item, index) => {
        return (
          <div key={item.id}>
            {index >= 3 ? (
              <button onClick={removeNewCashFlowTypeHandler(index)}>X</button>
            ) : (
              <div> ? </div>
            )}
            <FormControl
              fullWidth
              className={classes.margin}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-amount">
                {item.name}
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={item.amount}
                onChange={handleChange("amount", index)}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                labelWidth={60}
              />
            </FormControl>
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
          placeholder="Add Savings Type"
        />
        <button type="submit"> Add </button>
      </form>
    </>
  );
};

export default Savings;
