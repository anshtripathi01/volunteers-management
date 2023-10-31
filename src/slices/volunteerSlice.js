import { createSlice } from "@reduxjs/toolkit";
import { addVolunteer, editVolunteer, fetchVolunteers } from "../services/volunteerServices";
const initialState = {
  volunteers: [],
};

const volunteerSlice = createSlice({
  name: "volunteers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchVolunteers.fulfilled, (state, action) => {
      state.volunteers = action.payload;
    });
    builder.addCase(addVolunteer.fulfilled, (state, action) => {
      state.volunteers = [...state.volunteers, action.payload];
    });
    builder.addCase(editVolunteer.fulfilled, (state, action) => {
      return state;
    });
  },
});

export default volunteerSlice.reducer;
