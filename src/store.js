import { configureStore } from "@reduxjs/toolkit";
import volunteerReducer from "./slices/volunteerSlice";
import eventReducer from "./slices/eventSlice";
const store = configureStore({
  reducer: {
    volunteers:volunteerReducer,
    events:eventReducer,
  },
});

export default store;
