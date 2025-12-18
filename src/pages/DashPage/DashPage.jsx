import React from "react";
import NavBar from "../../common/component/NavBar/NavBar";
import ProgressBar from "../../common/component/ProgressShortBar/ProgressBar";
import { Box, Typography } from "@mui/material";
import NormalBtn from "../../common/component/Button/NormalBtn";
import ActionBtn from "../../common/component/Button/ActionBtn/ActionBtn";
import AddIcon from "@mui/icons-material/Add";
import "./style.css";
import Footer from "../../common/component/Footer/Footer";
import Card from "../../common/component/Card/Card";
import imageList from "../../common/store/Store";
import NavBtn from "../../common/component/Button/NavBtn/NavBtn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function DashPage() {
  return (
    <div className="content">
      <NavBar progressbar={<ProgressBar label={"My goals"} />} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                textAlign: "start",
                mb: 3,
                mt: 2,
                maxWidth: 420,
              }}
            >
              What are your main goals in life?
            </Typography>
            <NormalBtn label={"All goals"} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "end",
              height: "150px",
              p: 2,
            }}
          >
            <ActionBtn lable="Add goal" icon={AddIcon} iconPosition="start" />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-arround",
            gap: 6,
          }}
        >
          {imageList && imageList.length > 0 ? (
            imageList.map((img) => <Card key={img.id} image={img} />)
          ) : (
            <Typography>No data available</Typography>
          )}
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
