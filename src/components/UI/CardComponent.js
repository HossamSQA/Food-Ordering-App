import React from "react";
import { Card, CardContent } from "@mui/material";

const CardComponent = (props) => {
  return (
    <Card>
      <CardContent>{props.children}</CardContent>
    </Card>
  );
};

export default CardComponent;
