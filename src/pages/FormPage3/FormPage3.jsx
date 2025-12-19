import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import { useNavigate } from "react-router-dom";
import { setChildrenDetails } from "../../redux/slices/userSlice.js";
import { setMaritalDetails } from "../../redux/slices/userSlice.js";

export default function FormPage3() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [numChildren, setNumChildren] = useState(0);
  const [children, setChildren] = useState([]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    setChildren((prevChildren) => {
      const newChildren = [...prevChildren];
      while (newChildren.length < numChildren) {
        newChildren.push({ name: "", age: "" });
      }
      while (newChildren.length > numChildren) {
        newChildren.pop();
      }
      return newChildren;
    });
  }, [numChildren]);

  const handleChildChange = (index, field, value) => {
    const updated = [...children];
    updated[index][field] = value;
    setChildren(updated);
  };

  const isFormValid = children.every(
    (c) => c.name.trim() !== "" && c.age !== ""
  );

  const handleNext = () => {
    dispatch(setChildrenDetails(children));
    navigate("/page-6");
  };
  return (
    <div className="content">
      <NavBar progressbar={<ProgressBar label={"My details"} step={3} totalSteps={3}/>} />
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
          My name is <span style={{color:'#FF6347'}}>{user.firstName} {user.lastName}</span> 
        </Typography>
        <Typography>
          And I am <span style={{color:'#FF6347'}}>{user.title === "Mr" ? "male" : "female"}</span>  of <span style={{color:'#FF6347'}}>{user.age}</span>  years.
          old.
        </Typography>
        <Typography>I am married to <span style={{color:'#FF6347'}}>{user.wifeName}</span> .</Typography>

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
            value={numChildren}
            onChange={(e, newValue) => setNumChildren(newValue)}
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
          {children.map((child, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 1,
                alignItems: "center",
                mt: 2,
                width: "100%",
                maxWidth: 400,
              }}
            >
              <InputField
                icon={<AccessibilityNewIcon />}
                label={`Child ${index + 1} Name`}
                value={child.name}
                onChange={(e) =>
                  handleChildChange(index, "name", e.target.value)
                }
                fullWidth
              />
              <InputAge
                value={child.age}
                onChange={(age) => handleChildChange(index, "age", age)}
              />
            </Box>
          ))}
        </Box>
        <NavBtn
          label={"Next"}
          icon={ArrowForwardIcon}
          iconPosition="end"
          sx={{ mt: "30px" }}
          disabled={numChildren > 0 && !isFormValid}
          onClick={handleNext}
        />
      </Box>
      <Footer />
    </div>
  );
}
