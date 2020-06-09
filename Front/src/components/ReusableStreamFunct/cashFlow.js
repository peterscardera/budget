import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";

//general styles
import formStyles from "../form.module.scss";

//MATERIAL UI selector
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
//React Icons
import { RiQuestionLine } from "react-icons/ri";
import { MdRemoveCircleOutline } from "react-icons/md";

import { BudgetContext } from "../../budgetContext";

// Reusable functional component for expenses and income*****

let counterIds = 0;
const CashFlow = ({ type, placeholderForNew }) => {
  const {
    incomeState,
    expenseState,
    recordTypingIncome,
    recordTypingExpense,
    addIncome,
    addExpense,
    removeIncome,
    removeExpense,
  } = useContext(BudgetContext);
  const [labelState, setLabelState] = useState("");
  const [currentMapState, setCurrentMapState] = useState(null);
  // console.log(currentMapState,'CURRENT STATE')
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

  // Will set the array of objects to a local state. Since CashFlow is being called twice (income.js and expense.js)
  useEffect(() => {
    if (type === "income") {
      setCurrentMapState(incomeState);
    } else if (type === "expense") {
      setCurrentMapState(expenseState);
    }
  }, [incomeState, expenseState]);

  //HANDLE INPUT CHANGES FOR NEW LABEL
  const handleLableInputChange = (e) => {
    setLabelState(e.target.value);
  };

  //HANDLE INPUT CHANGES EXISING STREAM
  const handleChange = (fieldType, index) => (e) => {
    e.preventDefault();
    let value = e.target.value;

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
    if (type === "income") {
      removeIncome({ index });
    } else if (type === "expense") {
      removeExpense({ index });
    }
  };

  return (
    <Wrapper>
      {currentMapState !== null &&
        currentMapState.map((item, index) => {
          return (
            <div key={`${item.id}`} className={formStyles.form}>
              {index > 0 ? (
                <StyledButton onClick={removeNewCashFlowTypeHandler(index)}>
                  <MdRemoveCircleOutline size={"25px"} />
                </StyledButton>
              ) : (
                <StyledDiv>
                  <RiQuestionLine size={"25px"} />
                  <InfoPopUp type={type}>
                    {type === "expense" ? (
                      <span>Monthly after tax bill</span>
                    ) : (
                      <span> After deductions </span>
                    )}
                  </InfoPopUp>
                </StyledDiv>
              )}
              <FirstRow>
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
                <StyledInput
                  required
                  name={item.name}
                  id={`input-${index}${type}`}
                  value={currentMapState[`${index}`].amount}
                  onChange={handleChange("amount", index)}
                  type="text"
                  placeholder="$0.00"
                />
              </FirstRow>
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
    </Wrapper>
  );
};

export default CashFlow;
const Wrapper = styled.div`
  /* background:blue; */
  margin: 20px 40px;
`;

//FirstRow contains the input select and the amount
const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const StyledButton = styled.button`
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  width: 25px;
  padding: 0;
`;
const StyledDiv = styled.div`
  width: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    span {
      display: block;
    }
  }
`;

const InfoPopUp = styled.span`
  background: #f8f8f8;
  border: 2px solid #dfdfdf;
  font-size: 13px;
  /* height: 40px; */
  width: 150px;
  /* letter-spacing: 1px; */
  position: relative;
  text-align: center;

  top: -60px;
  left: -10px;
  display: none;
  /* padding: 0 20px; */
  &:after {
    content: "";
    position: absolute;
    bottom: -7px;
    width: 10px;
    height: 10px;
    border-bottom: 2px solid #dfdfdf;
    border-right: 2px solid #dfdfdf;
    background: #f8f8f8;
    left: 20%;
    /* margin-left: -10px; */
    -moz-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

const StyledInput = styled.input`
  border-top: none;
  border-left: none;
  border-right: none;
  padding-top: 25px;
  padding-left: 15px;
  outline: none;
  &:focus {
    border-bottom: 1.5px solid ${(props) => props.theme.grey};
  }

  &:before {
    content: "te";
    width: 10px;
    height: 10px;
  }
`;
//notes: i have initial state for some key values as "null" instead of null
//VM6792 0.chunk.js:51577 Warning: `value` prop on `input` should not be null.
// Consider using an empty string to clear the component or `undefined` for uncontrolled components.
//https://github.com/facebook/react/issues/11417
