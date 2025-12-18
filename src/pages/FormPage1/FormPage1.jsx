import * as React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import NavBar from "../../common/component/NavBar/NavBar";
import ProgressBar from "../../common/component/ProgressShortBar/ProgressBar";
import Footer from "../../common/component/Footer/Footer";
import {
  Box,
  Typography,
  MenuItem,
  FormControl,
  Select,
  InputAdornment,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import InputField from "../../common/component/InputField/InputField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import NavBtn from "../../common/component/Button/NavBtn/NavBtn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { setUserDetails } from "../../redux/slices/userSlice";
import "./style.css";

export default function FormPage1() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // States
  const [title, setTitle] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [dob, setDob] = React.useState(null);

  // For styling
  const hasValue = Boolean(dob);

  // Age calculation
  const calculateAge = (birthDate) => {
    return dayjs().diff(dayjs(birthDate), "year");
  };

  // Form validation
  const isFormValid = title && firstName.trim() && lastName.trim() && dob;

  // Handle Next
  const handleNext = () => {
    const age = calculateAge(dob);

    dispatch(
      setUserDetails({
        title,
        firstName,
        lastName,
        dob: dob.toISOString(),
        age,
      })
    );

    navigate("/page-4");
  };

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
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            textAlign: "center",
            mb: 4,
            maxWidth: 420,
          }}
        >
          Let's get started by telling a little bit about yourself
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            flexWrap: "wrap",
            width: "100%",
            maxWidth: 400,
            p: 2,
          }}
        >
          {/* Title + First Name */}
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              flexDirection: "row",
              width: "100%",
              gap: "5px",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
              <Typography
                variant="body2"
                sx={{ height: "10px", color: "transparent" }}
              ></Typography>

              <FormControl sx={{ m: 1, minWidth: 80 }}>
                <Select
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  displayEmpty
                  autoWidth
                  inputProps={{ "aria-label": "Without label" }}
                  sx={{
                    color: title ? "#000" : "#707070",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: title ? "#000" : "#707070",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: title ? "#000" : "#707070",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#000",
                    },
                    "& .MuiSelect-icon": {
                      color: title ? "#000" : "#707070",
                      right: "auto",
                      left: 8,
                    },
                    "& .MuiSelect-select": {
                      paddingLeft: "32px",
                    },
                  }}
                >
                  <MenuItem value="">
                    <em style={{ color: "#707070" }}>None</em>
                  </MenuItem>
                  <MenuItem value="Mr">Mr.</MenuItem>
                  <MenuItem value="Mrs">Mrs.</MenuItem>
                  <MenuItem value="Miss">Miss</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ flexGrow: 1 }}>
              <InputField
                label="First Name"
                icon={<PersonIcon />}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Box>
          </Box>

          {/* Last Name */}
          <Box display={{ width: "100%" }}>
            <InputField
              label="Last Name"
              icon={<PersonIcon />}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              fullWidth
            />
          </Box>

          {/* DOB */}
          <Box sx={{ width: "100%" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Box sx={{ width: "100%" }}>
                <Typography
                  variant="body2"
                  sx={{
                    mb: 0.5,
                    fontWeight: 500,
                    color: hasValue ? "#000" : "#707070",
                  }}
                >
                  My date of birth
                </Typography>

                <DatePicker
                  value={dob}
                  onChange={(newValue) => setDob(newValue)}
                  format="DD-MM-YYYY"
                  maxDate={dayjs()}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      InputProps: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <PersonIcon
                              sx={{ color: hasValue ? "#000" : "#707070" }}
                            />
                          </InputAdornment>
                        ),
                      },
                      sx: {
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
                      },
                    },
                  }}
                />
              </Box>
            </LocalizationProvider>
          </Box>
        </Box>

        {/* Next Button */}
        <NavBtn
          label={"Next"}
          icon={ArrowForwardIcon}
          iconPosition="end"
          sx={{ mt: "30px" }}
          disabled={!isFormValid}
          onClick={handleNext}
        />
      </Box>
      <Footer />
    </div>
  );
}
