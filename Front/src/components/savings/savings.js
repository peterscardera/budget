import React, { useContext, useState } from "react";
import styled from "styled-components";
import { DefaultTitle } from "../reusable SC/title";
//Material UI
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
//Context
import { BudgetContext } from "../../budgetContext";
//React icons
import { MdRemoveCircleOutline } from "react-icons/md";

let counterIds = 0;
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
    let value = e.target.value;
    recordTypingSaving({ value, fieldType, index });
  };

  return (
    <>
      <DefaultTitle>Savings</DefaultTitle>
      <FirstRow> 
   
      {savingsState.map((item, index) => {
        return (
          <div key={item.id}>
            {index > 0 && (
              <StyledButton onClick={removeNewCashFlowTypeHandler(index)}>
                {" "}
                <MdRemoveCircleOutline size={"25px"} />
              </StyledButton>
            )}
            <FormControl
              width={"200px"}
              className={classes.margin}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-amount">
                {item.name}
              </InputLabel>
              <OutlinedInput
                width={"100px"}
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
      </FirstRow>
    </>
  );
};

export default Savings;

const StyledButton = styled.button`
  outline: none;
  border: none;
  /* background: red; */
  cursor: pointer;
  width: 25px;
  padding: 0;
  /* display:flex;
  justify-content:center; */
`;

const FirstRow = styled.div`
  margin: 20px 40px;
`;