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
import { useSelector, useDispatch } from "react-redux";
import { setUserDetails } from "../../redux/slices/userSlice";
import { setMaritalDetails } from "../../redux/slices/userSlice.js";

export default function FormPage2() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [wifeName, setWifeName] = useState("");
  const [married, setMarried] = useState(false);
  const isFormValid = !married || (married && wifeName.trim() !== "");

  const handleNext = () => {
    // Save marital details in Redux
    dispatch(setMaritalDetails({ married, wifeName: married ? wifeName : "" }));

    if (married) {
      navigate("/page-5"); // Married → go to page 3 (children)
    } else {
      navigate("/page-6"); // Single → skip page 3
    }
  };

  return (
    <div className="content">
      <NavBar progressbar={<ProgressBar label={"My details"} step={2} totalSteps={3}/>} />
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
        <Typography>
          My name is {user.firstName} {user.lastName}
        </Typography>
        <Typography>
          And I am {user.title === "Mr" ? "male" : "female"} of {user.age} years
          old.
        </Typography>
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
          Are you married?
        </Typography>
        <Switch onChange={(val) => setMarried(val)} />
        <div></div>
        {married && (
          <InputField
            icon={<WomanIcon />}
            label={"My wife is"}
            value={wifeName}
            onChange={(e) => setWifeName(e.target.value)}
            fullWidth
            sx={{ mt: 2 }}
          />
        )}
        <NavBtn
          label={"Next"}
          icon={ArrowForwardIcon}
          iconPosition="end"
          sx={{ mt: "30px" }}
          disabled={married && wifeName.trim() === ""} //only disabled if married + empty wife name
          onClick={handleNext}
        />
      </Box>
      <Footer />
    </div>
  );
}
