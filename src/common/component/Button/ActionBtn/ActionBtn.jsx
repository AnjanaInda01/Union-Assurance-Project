import React from "react";
import Button from "@mui/material/Button";

export default function ActionBtn({lable}) {
  return (
    <div>
      <Button
        sx={{
          borderColor: "#FE5000",
          color: "#FE5000",
          borderRadius: "20px",
          px:3,
          py:1,
          border:'2px solid',
          fontWeight:'600'
        }}
        variant="outlined"
      >
        {lable}
      </Button>
    </div>
  );
}
