import * as React from "react";
import NavBar from "../../common/component/NavBar/NavBar";
import ProgressBar from "../../common/component/ProgressShortBar/ProgressBar";
import "./style.css";
import Footer from "../../common/component/Footer/Footer";
import { Box } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PersonIcon from "@mui/icons-material/Person";
import InputField from "../../common/component/InputField/InputField";
import { useState } from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import NavBtn from "../../common/component/Button/NavBtn/NavBtn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

export default function FormPage1() {
  const navigate = useNavigate();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [value, setValue] = React.useState(null);
  const hasValue = Boolean(value);
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
          Let&apos;s get started by telling a little bit about yourself
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
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              flexDirection: "row",
              width: "100%",
              gap:'5px'
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
              {/* Empty Typography placeholder */}
              <Typography
                variant="body2"
                sx={{ height: "10px", color: "transparent" }} // transparent so it's empty but occupies space
              >
                {/* Empty on purpose */}
              </Typography>

              {/* FormControl with Select */}
              <FormControl sx={{ m: 1, minWidth: 80 }}>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  autoWidth
                  inputProps={{ "aria-label": "Without label" }}
                  sx={{
                    color: age ? "#000" : "#707070",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: age ? "#000" : "#707070",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: age ? "#000" : "#707070",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#000",
                    },
                    "& .MuiSelect-icon": {
                      color: age ? "#000" : "#707070",
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
                  <MenuItem value={20}>Mr.</MenuItem>
                  <MenuItem value={21}>Mrs</MenuItem>
                  <MenuItem value={22}>Miss</MenuItem>
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
          <Box display={{ width: "100%"}}>
            <InputField
              label="Last Name"
              icon={<PersonIcon />}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              fullWidth
            />
          </Box>
          <Box sx={{ width: "100%"}}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Box sx={{ width: "100%" }}>
                {/* External Label */}
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

                {/* Date Field */}
                <DatePicker
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
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
        <NavBtn
          label={"Next"}
          icon={ArrowForwardIcon}
          iconPosition="end"
          sx={{ mt: "30px" }}
          onClick={()=>navigate('/page-4')}
        />
      </Box>
      <Footer />
    </div>
  );
}
