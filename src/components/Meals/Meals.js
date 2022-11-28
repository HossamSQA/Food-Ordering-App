import React from "react";
import { Stack } from "@mui/material";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
  return (
    <Stack spacing={4}>
      <MealsSummary />
      <AvailableMeals />
    </Stack>
  );
};

export default Meals;
