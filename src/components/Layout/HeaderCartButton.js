import React, { useContext } from "react";
import { Badge, Box, Button, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numOfCartItems = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  return (
    <Button
      onClick={props.onClick}
      color="error"
      sx={{
        width: "150px",
        backgroundColor: "white",
        fontWeight: "bold",
        boxShadow: "2",
        ":hover": {
          backgroundColor: "black",
          color: "white",
          transform: "scale(1.1)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <ShoppingCartIcon />

        <Typography variant="h6">Cart</Typography>

        <Badge
          showZero
          badgeContent={numOfCartItems}
          color="error"
          sx={{
            paddingLeft: "20px",
            fontWeight: "bold",
          }}
        />
      </Box>
    </Button>
  );
};

export default HeaderCartButton;
