import React, { useState } from "react";

//general styles
import formStyles from "../form.module.scss";

//MATERIAL UI selector
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const Income = () => {
  const [netIncomeState, setNetIncomeState] = useState({
    incomeTypes: [
      {
        name: "Net-Income",
        frequency: null,
        amount: null,
      },
    ],
  });
  console.log(netIncomeState, "TESTERINOOO");

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

  //HANDLE INPUT CHANGES
  const handleChange = (fieldType, index) => (e) => {
    e.preventDefault();
    console.log(e.target, "TARGET");

    //copy of array of objects
    let orignalIncomeTypeArrayOfObj = [...netIncomeState.incomeTypes];
    //modifying specific value
    orignalIncomeTypeArrayOfObj[index][fieldType] = e.target.value;
    setNetIncomeState({
      ...netIncomeState,
      incomeTypes: orignalIncomeTypeArrayOfObj,
    });
  };

  //HANDLE ADDING A NEW INCOME TYPE
  const addIncomeTypeHandler = (e) => {
    e.preventDefault();
    let orignalIncomeTypeArrayOfObj = [...netIncomeState.incomeTypes];

    orignalIncomeTypeArrayOfObj.push({
      name: "New stream",
      frequency: null,
      amount: null,
    });

    setNetIncomeState({
      ...netIncomeState,
      incomeTypes: orignalIncomeTypeArrayOfObj,
    });
  };

  //HANDLE REMOVING AN INCOME TYPE
  const removeNewIncomeTypeHandler = (index) => (e) => {
    console.log(index, 'INDEX DELETING')
     //copy of array of objects
     let orignalIncomeTypeArrayOfObj = [...netIncomeState.incomeTypes];
     let objDeleting = orignalIncomeTypeArrayOfObj.splice(index,1)


    //  let newArrayOfObjs =orignalIncomeTypeArrayOfObj.filter((item, i) => {
    //     if(i !== index) {
    //         return item
    //       }

     //modifying specific value
         setNetIncomeState({
       ...netIncomeState,
       incomeTypes: orignalIncomeTypeArrayOfObj,
     });

  };

  return (
    <>
      Income
      {netIncomeState.incomeTypes.map((item, index) => {
        return (
          <>
            <div key={`${item.name}`} className={formStyles.form}>
              {index > 0 ? (
                <button onClick={removeNewIncomeTypeHandler(index)}>
                  remove
                </button>
              ) : (
                <div> ? </div>
              )}
              <FormControl className={classes.formControl}>
                <InputLabel id={item.name}>
                  {item.name}
                </InputLabel>
                <Select
                  name={item.name}
                  labelId={item.name}
                  id={`select-${index}`}
                  value={netIncomeState.incomeTypes[`${index}`].frequency}
                  onChange={handleChange("frequency", index)}
                >
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
                value={netIncomeState.amount}
                onChange={handleChange("amount", index)}
                type="text"
                placeholder="0.00"
              />
            </div>
          </>
        );
      })}
      <button onClick={addIncomeTypeHandler}> Add an Income Type</button>
    </>
  );
};

export default Income;
