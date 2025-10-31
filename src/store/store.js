import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./slices/profileSlice";
import matchesReducer from "./slices/matchesSlice";

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    matches: matchesReducer,
  },
});
