import React, { useRef, useState } from "react";
import { Box } from "@mui/material";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  // console.log(amountInputRef);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <Box sx={{ marginBottom: "0.75rem" }}>
      <form
        onSubmit={submitHandler}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <Input
          ref={amountInputRef}
          width="5rem"
          label="Amount"
          input={{
            id: "amount_" + props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />

        <button className="btn-add mt-2">+ Add</button>

        {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
      </form>
    </Box>
  );
};

export default MealItemForm;
