import * as React from "react";
import NavBar from "../../common/component/NavBar/NavBar";
import ProgressBar from "../../common/component/ProgressShortBar/ProgressBar";
import "./style.css";
import Footer from "../../common/component/Footer/Footer";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
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


export default function FormPage1() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = React.useState(null);

  return (
    <div className="content">
      <NavBar progressbar={<ProgressBar label={"My details"} />} />
      <Box>
        <h1>Let's get started by telling a little bit about yourself</h1>
        <Box>
          <div>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                autoWidth
                inputProps={{ "aria-label": "Without label" }}
                sx={{
                  // text color
                  color: age ? "#000" : "#707070",

                  // outline
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: age ? "#000" : "#707070",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: age ? "#000" : "#707070",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#000",
                  },

                  // dropdown icon
                  "& .MuiSelect-icon": {
                    color: age ? "#000" : "#707070",
                    right: "auto",
                    left: 8,
                  },

                  // text padding (icon on left)
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

            <InputField
              label="First Name"
              icon={<PersonIcon />}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <InputField
            label="Last Name"
            icon={<PersonIcon />}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{ width: 300 }}>
              <DatePicker
                label="My date of birth"
                value={dob}
                onChange={(newValue) => setDob(newValue)}
                format="DD-MM-YYYY"
                maxDate={dayjs()} // prevent future dates
                slotProps={{
                  textField: {
                    fullWidth: true,
                    InputProps: {
                      startAdornment: (
                        <PersonIcon sx={{ mr: 1, color: "action.active" }} />
                      ),
                    },
                  },
                }}
              />
            </Box>
          </LocalizationProvider>
        </Box>
      </Box>
      <Footer />
    </div>
  );
}
