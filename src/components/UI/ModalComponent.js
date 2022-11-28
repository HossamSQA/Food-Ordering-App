import React, { useState } from "react";
import { Box, Modal } from "@mui/material";
import Cart from "../Cart/Cart";
import HeaderCartButton from "../Layout/HeaderCartButton";

const ModalComponent = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <HeaderCartButton onClick={handleOpen} />
      <Modal open={open} onClose={handleClose} onCancel={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 700,
            backgroundColor: "white",
            boxShadow: 24,
            p: 2,
            borderRadius: "1rem",
          }}
        >
          <Cart onClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
};

export default ModalComponent;
