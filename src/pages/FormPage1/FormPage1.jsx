import * as React from "react";
import NavBar from "../../common/component/NavBar/NavBar";
import ProgressBar from "../../common/component/ProgressShortBar/ProgressBar";
import "./style.css";
import Footer from "../../common/component/Footer/Footer";
import { Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function FormPage1() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
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
                  "& .MuiSelect-icon": {
                    right: "auto",
                    left: 8,
                  },
                  "& .MuiSelect-select": {
                    paddingLeft: "32px",
                  },
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={20}>Mr.</MenuItem>
                <MenuItem value={21}>Mrs</MenuItem>
                <MenuItem value={22}>Miss</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Box>
      </Box>
      <Footer />
    </div>
  );
}
