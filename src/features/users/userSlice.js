import { createSlice } from "@reduxjs/toolkit";
const initialstate = {
  name: "",
  email: "",
  photo: "",
};
const userSlice = createSlice({
  name: "user",
  initialstate,
  reducer: {
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
  },
});
