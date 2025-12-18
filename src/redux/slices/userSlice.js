import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  firstName: "",
  lastName: "",
  dob: "",
  age: 0,
  gender: "",
  married: false,
  wifeName: "",
  children: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      Object.assign(state, action.payload);
    },
    setMaritalDetails: (state, action) => {
      state.married = action.payload.married;
      state.wifeName = action.payload.wifeName;
    },
    setChildrenDetails: (state, action) => {
      state.children = action.payload;
    },
  },
});

export const { setUserDetails, setMaritalDetails, setChildrenDetails } = userSlice.actions;
export default userSlice.reducer;
