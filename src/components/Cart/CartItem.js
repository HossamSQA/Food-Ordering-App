import React from "react";
import {
  Box,
  Button,
  Chip,
  Divider,
  ListItem,
  Typography,
} from "@mui/material";

const CartItem = (props) => {
  return (
    <ListItem
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: "0.25rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          flexDirection: "column",
        }}
      >
        <Box
          variant="div"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold", width: "12rem" }}>
            {props.name}
          </Typography>

          <Box
            sx={{
              border: "2px solid #072448",
              borderRadius: "10%",
              padding: "7px",
              boxShadow: 2,
            }}
          >
            ${props.price}
          </Box>

          <Divider>
            <Chip
              label="X"
              sx={{
                backgroundColor: "#f8aa4b",
                color: "white",
                fontWeight: "bold",
              }}
            />
          </Divider>

          <Box
            sx={{
              border: "2px solid #072448",
              borderRadius: "10%",
              padding: "7px",
              boxShadow: 2,
            }}
          >
            {props.amount}
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Button
          onClick={props.onAdd}
          variant="contained"
          color="success"
          sx={{
            boxShadow: "2",
          }}
        >
          +
        </Button>

        <Button
          onClick={props.onRemove}
          variant="contained"
          color="error"
          sx={{
            boxShadow: "2",
          }}
        >
          -
        </Button>
      </Box>
    </ListItem>
  );
};

export default CartItem;
