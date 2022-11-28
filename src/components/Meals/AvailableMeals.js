import React, { useState, useEffect } from "react";
import {
  Alert,
  AlertTitle,
  Box,
  CircularProgress,
  Divider,
  List,
  Typography,
} from "@mui/material";
import CardComponent from "../UI/CardComponent";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://food-app-1104-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress color="error" sx={{ marginTop: "7rem" }} />
      </Box>
    );
  }

  if (httpError) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          <Typography>{httpError}</Typography>
        </Alert>
      </Box>
    );
  }

  const mealList = meals.map((meal) => (
    <Box component="div" key={meal.id}>
      <MealItem
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
      <Divider />
    </Box>
  ));

  return (
    <CardComponent sx={{ boxShadow: "25", borderRadius: "50px" }}>
      <List>{mealList}</List>
    </CardComponent>
  );
};

export default AvailableMeals;
