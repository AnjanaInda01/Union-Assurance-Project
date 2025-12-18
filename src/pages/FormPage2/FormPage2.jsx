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
import NavBtn from "../../common/component/Button/NavBtn/NavBtn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

export default function FormPage2() {
  const navigate = useNavigate();
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
          pt: 4,
        }}
      >
        <Typography>My name is Anjana</Typography>
        <Typography>And I am male of 35 years old.</Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            textAlign: "center",
            mb: 3,
            mt:2,
            maxWidth: 420,
          }}
        >
          Are you married?
        </Typography>
        <Switch />
        <div></div>
        <InputField
          icon={<WomanIcon />}
          label={"My wife is"}
          value={wifeName}
          onChange={(e) => setWifeName(e.target.value)}
          fullWidth
        />
        <NavBtn
          label={"Next"}
          icon={ArrowForwardIcon}
          iconPosition="end"
          sx={{ mt: "30px" }}
          onClick={()=>navigate('/page-5')}
        />
      </Box>
      <Footer />
    </div>
  );
}
