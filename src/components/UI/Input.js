import React, { forwardRef } from "react";
import { Box } from "@mui/material";

const Input = forwardRef((props, ref) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 1,
        textAlign: "center",
      }}
    >
      <label
        htmlFor={props.input.id}
        style={{ fontSize: "1rem", fontWeight: "bold" }}
      >
        {props.label}
      </label>

      <input
        ref={ref}
        {...props.input}
        label={props.label}
        style={{
          width: "auto",
          fontSize: "1rem",
          textAlign: "center",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          border: "none",
          borderRadius: "1rem",
          padding: "0.25rem",
        }}
      />
    </Box>
  );
});

export default Input;
