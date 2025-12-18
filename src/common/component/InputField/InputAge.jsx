import React, { useState } from "react";
import {
  Box,
  OutlinedInput,
  InputAdornment,
  Typography,
  styled,
} from "@mui/material";

const AgeContainer = styled(Box)({
  backgroundColor: "#C4C4C4",
  color: "#FFFFFF",
  height: "37px", // Fixed height to allow for vertical margin
  display: "flex",
  alignItems: "center",
  padding: "0 12px",
  borderRadius: "10px", // Round corners on all sides
  fontSize: "14px",
  whiteSpace: "nowrap",
  marginRight: "6px", // Margin on the right side
});

export default function InputAge() {
  return (
    <Box sx={{ width: 150, p: 2 }}>
      <Typography
        sx={{
          color: "#707070",
          fontSize: "16px",
          mb: 0.5,
          ml: 0.2,
          fontFamily: "Arial, sans-serif",
        }}
      >
        he/she is
      </Typography>

      <OutlinedInput
        fullWidth
        sx={{
          height: "55px",
          borderRadius: "12px",
          color: "black",
          backgroundColor: '#fff',
          boxShadow: "0 6px 14px rgba(0,0,0,0.15)",
          overflow: "hidden",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#969BAB",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#969BAB",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#969BAB",
            borderWidth: "1px",
          },
          // Adjust padding to ensure the cursor doesn't hit the gray box
          paddingRight: "4px",
        }}
        endAdornment={
          <InputAdornment
            position="end"
            sx={{
              height: "100%",
              margin: 0,
            }}
          >
            <AgeContainer>years old</AgeContainer>
          </InputAdornment>
        }
      />
    </Box>
  );
}
