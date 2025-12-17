import React from "react";
import NavBar from "../../common/component/NavBar/NavBar";
import Footer from "../../common/component/Footer/Footer";
import "./style.css";
import NavBtn from "../../common/component/Button/NavBtn/NavBtn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Typography } from "@mui/material";
import loadImage from "../../assets/loadImg2.png";
import ActionBtn from "../../common/component/Button/ActionBtn/ActionBtn";

export default function LoadingPage2() {
  return (
    <div className="content">
      <NavBar actionBtn={<ActionBtn lable="Already have a account"/>} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: "100px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
          }}
        >
          <h1 style={{ fontSize: "60px" }}>Life Insurance Made Simple</h1>
          <Typography sx={{ fontSize: "20px", fontWeight: "" }}>
            Find your goals and plan your future
          </Typography>
          <NavBtn
            label="Get Started"
            icon={ArrowForwardIcon}
            iconPosition="end"
            sx={{ mt: "30px" }}
          />
        </div>
        <div>
          <img style={{ height: "80vh" }} src={loadImage} alt="" />
        </div>
      </Box>

      <Footer />
    </div>
  );
}
