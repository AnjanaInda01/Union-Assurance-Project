import React from "react";
import { Box, Typography, IconButton, CircularProgress } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function ProgressBar({label}) {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: "40px",
        px: 3,
        py: 1.5,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0px 8px 20px rgba(0,0,0,0.08)",
        maxWidth: 500,
        mx: "auto",
      }}
    >
      {/* Left: Back Arrow */}
      <IconButton>
        <ArrowBackIcon />
      </IconButton>

      {/* Center: Title */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          color:'#18191F'
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}
