import { createSlice } from "@reduxjs/toolkit";
import { addEvent, editEvent, fetchEvents } from "../services/eventServices";
const initialState = {
  events: [],
};

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEvents.fulfilled, (state, action) => {
      state.events = action.payload;
    });
    builder.addCase(addEvent.fulfilled, (state, action) => {
      state.events = [...state.events, action.payload];
    });
    builder.addCase(editEvent.fulfilled, (state, action) => {
      return state;
    });
  },
});

export default eventSlice.reducer;
