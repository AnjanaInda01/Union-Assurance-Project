import React from 'react'
import { TextField, InputAdornment } from "@mui/material";

export default function InputField({ label, icon, value, onChange }) {
  return (
    <TextField
      label={label}
      variant="outlined"
      value={value}
      onChange={onChange}
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {icon}
          </InputAdornment>
        ),
      }}
    />
  )
}
