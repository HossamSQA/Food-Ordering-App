import React, { useContext } from "react";
import { Box, ListItem, Typography } from "@mui/material";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  // const price = +props.price;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <ListItem>
      <Box
        width="100%"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            gap: 1,
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            {props.name}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "end",
              gap: 3,
            }}
          >
            <Typography variant="p" width="15rem">
              {props.description}
            </Typography>

            <Typography variant="small" color="#e65100" fontWeight="bold">
              ${props.price}
            </Typography>
          </Box>
        </Box>

        <Box>
          <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
        </Box>
      </Box>
    </ListItem>
  );
};

export default MealItem;
