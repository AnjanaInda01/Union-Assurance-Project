import React from "react";
import Button from "@mui/material/Button";

export default function ActionBtn({
  lable,
  icon: Icon,
  iconPosition = "end",
  sx = {},
}) {
  return (
    <div>
      <Button
        startIcon={iconPosition === "start" && Icon ? <Icon /> : null}
        endIcon={iconPosition === "end" && Icon ? <Icon /> : null}
        sx={{
          borderColor: "#FE5000",
          color: "#FE5000",
          borderRadius: "20px",
          px: 3,
          py: 1,
          border: "2px solid",
          fontWeight: "600",
          ...sx,
        }}
        variant="outlined"
      >
        {lable}
      </Button>
    </div>
  );
}
