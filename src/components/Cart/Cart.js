import React, { useContext, useState } from "react";
import { Box, Button, Divider, List, Stack, Typography } from "@mui/material";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.totalAmount;

  const hasItem = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    await fetch(
      "https://food-app-1104-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    cartCtx.clearCart();
  };

  const cartItems = (
    <List>
      {cartCtx.items.map((item) => (
        <Box key={item.id}>
          <CartItem
            name={item.name}
            amount={item.amount}
            price={item.price.toFixed(2)}
            onRemove={() => cartItemRemoveHandler(item.id)}
            onAdd={() => cartItemAddHandler(item)}
          />
        </Box>
      ))}
      <Divider
        sx={{
          height: "0.5rem",
          backgroundColor: "#C62828",
          marginTop: "0.75rem",
          marginBottom: 0,
        }}
      />
    </List>
  );

  const modalActions = (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        gap: "1rem",
        marginTop: "1rem",
      }}
    >
      <Button
        onClick={props.onClose}
        variant="contained"
        color="error"
        sx={{
          boxShadow: "2",
        }}
      >
        Close
      </Button>

      {hasItem && (
        <Button
          onClick={orderHandler}
          variant="contained"
          color="success"
          sx={{
            boxShadow: "2",
          }}
        >
          Order
        </Button>
      )}
    </Box>
  );

  return (
    <Stack spacing={1}>
      {cartItems}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Total Price
        </Typography>

        <Typography variant="h6" fontWeight="bold">
          ${totalAmount.toFixed(2)}
        </Typography>
      </Box>

      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}

      {!isCheckout && modalActions}
    </Stack>
  );
};

export default Cart;
