import React from "react";
import { Paper, Stack, Typography } from "@mui/material";

const MealsSummary = () => {
  return (
    <Paper
      elevation={5}
      sx={{
        width: "47rem",
        padding: "2rem",
        margin: "-7rem auto 0 auto",
        zIndex: "1",
        backgroundColor: "#424242",
        color: "#ffffff",
      }}
    >
      <Stack spacing={3} sx={{ textAlign: "center" }}>
        <Typography component="h6" variant="h4" fontWeight="bold">
          Delicious Food, Delivered to you
        </Typography>
        <Typography component="p">
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </Typography>
        <Typography component="p">
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </Typography>
      </Stack>
    </Paper>
  );
};

export default MealsSummary;
