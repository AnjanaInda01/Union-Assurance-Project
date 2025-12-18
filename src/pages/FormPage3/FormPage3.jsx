import React, { useState } from "react";
import NavBar from "../../common/component/NavBar/NavBar";
import ProgressBar from "../../common/component/ProgressShortBar/ProgressBar";
import "./style.css";
import { Box, Typography } from "@mui/material";
import Footer from "../../common/component/Footer/Footer";
import Slider from "@mui/material/Slider";
import InputField from "../../common/component/InputField/InputField";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import NavBtn from "../../common/component/Button/NavBtn/NavBtn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import InputAge from "../../common/component/InputField/InputAge";

export default function FormPage3() {
  const [value, setValue] = useState(0);
  const [childName, setChildName] = useState("");
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
        <Typography>I am married to Dilu.</Typography>

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
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              textAlign: "center",
              mb: 3,
              mt: 2,
              maxWidth: 420,
            }}
          >
            I have (Kids)
          </Typography>
          <Slider
            sx={{
              "& .MuiSlider-thumb": {
                height: 16, // smaller thumb
                width: 16,
                backgroundColor: "#FE5000",
                "&:hover": {
                  boxShadow: "0 0 0 6px rgba(254, 80, 0, 0.16)",
                },
              },
              "& .MuiSlider-track": {
                height: 4, // thinner track
                backgroundColor: "#FE5000",
              },
              "& .MuiSlider-rail": {
                height: 4, // thinner rail
                opacity: 0.3,
                backgroundColor: "#FE5000",
              },
              "& .MuiSlider-mark": {
                display: "none", // hide marks
              },
            }}
            value={value}
            onChange={(e, newValue) => setValue(newValue)}
            min={0}
            max={10}
            step={1}
            valueLabelDisplay="on"
          />
          <Typography
            sx={{ color: "#707070", fontWeight: 600, fontSize: "20px" }}
          >
            they are
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <InputField
              icon={<AccessibilityNewIcon />}
              label={"My kid is"}
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
            />
            <InputAge/>
          </Box>
        </Box>
        <NavBtn
          label={"Next"}
          icon={ArrowForwardIcon}
          iconPosition="end"
          sx={{ mt: "30px" }}
        />
      </Box>
      <Footer />
    </div>
  );
}
