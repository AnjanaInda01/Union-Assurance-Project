import React from "react";
import NavBar from "../../common/component/NavBar/NavBar";
import ProgressBar from "../../common/component/ProgressShortBar/ProgressBar";
import "./style.css";
import { Box, Typography } from "@mui/material";
import Footer from "../../common/component/Footer/Footer";
import Switch from "../../common/component/Switch/Switch";
import InputField from "../../common/component/InputField/InputField";
import WomanIcon from "@mui/icons-material/Woman";
import { useState } from "react";

export default function FormPage2() {
  const [wifeName, setWifeName] = useState("");
  return (
    <div className="content">
      <NavBar progressbar={<ProgressBar label={"My details"} />} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          flexWrap: "wrap",
          pt: 6,
        }}
      >
        <Typography>My name is Anjana</Typography>
        <Typography>And I am male of 35 years old.</Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            textAlign: "center",
            mb: 4,
            maxWidth: 420,
          }}
        >
          Are you married?
        </Typography>
        <Switch />
        <InputField
          icon={<WomanIcon />}
          label={"My wife is"}
          value={wifeName}
          onChange={(e) => setWifeName(e.target.value)}
          fullWidth
        />
      </Box>
      <Footer />
    </div>
  );
}
