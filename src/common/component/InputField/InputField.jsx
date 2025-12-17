import React from "react";
import { TextField, InputAdornment, Typography, Box } from "@mui/material";

export default function InputField({ label, icon, value, onChange }) {
  const hasValue = Boolean(value); // true when user types
  return (
    <Box sx={{display:'flex',flexDirection:'column',maxWidth: "100%",}}>
      {/* External Label */}
      <Typography
        variant="body2"
        sx={{
          mb: 0.5,
          fontWeight: 500,
          color: hasValue ? "#000" : "#707070",
        }}
      >
        {label}
      </Typography>

      {/* Input Field */}
      <TextField
        variant="outlined"
        value={value}
        onChange={onChange}
        fullWidth
        InputProps={{
          startAdornment: icon && (
            <InputAdornment
              position="start"
              sx={{ color: hasValue ? "#000" : "#707070" }}
            >
              {icon}
            </InputAdornment>
          ),
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            color: hasValue ? "#000" : "#707070",

            "& fieldset": {
              borderColor: hasValue ? "#000" : "#707070",
            },
            "&:hover fieldset": {
              borderColor: hasValue ? "#000" : "#707070",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#000",
            },
          },
        }}
      />
    </Box>
  );
}
