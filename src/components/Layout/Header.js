import React, { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import { Box, Toolbar, AppBar, Typography } from "@mui/material";
import ModalComponent from "../UI/ModalComponent";

const Header = () => {
  return (
    <Fragment>
      <Box>
        <AppBar
          position="static"
          sx={{ backgroundColor: "#b71c1c", padding: "0 3rem" }}
        >
          <Toolbar>
            <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
              Meals
            </Typography>
            <ModalComponent />
          </Toolbar>
        </AppBar>
      </Box>
      <Box component="div">
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "15rem",
            background: `#ffffff url(${mealsImage}) no-repeat center center`,
            backgroundSize: "cover",
          }}
        ></Box>
      </Box>
    </Fragment>
  );
};

export default Header;
