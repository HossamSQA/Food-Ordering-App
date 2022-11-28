import React from "react";
import { Container } from "@mui/material";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

const App = () => {
  return (
    <CartProvider>
      <Header />
      <Container component="main">
        <Meals />
      </Container>
    </CartProvider>
  );
};

export default App;
