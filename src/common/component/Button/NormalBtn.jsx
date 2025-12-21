import React from "react";
import Button from "@mui/material/Button";

export default function NormalBtn({
  label,
  ...props
}) {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#E6E6E6",
        color: "#707070",
        borderRadius: "20px",
        px: 3,
        textTransform: "none",
        boxShadow: "none", 
        "&:hover": {
          backgroundColor: "#969BAB",
          color: "white", 
        }, 
      }}
      {...props} 
    >
      {label}
    </Button>
  );
}
