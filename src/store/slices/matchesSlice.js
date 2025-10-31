import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  matchesData: [],
};

const matchesSlice = createSlice({
  name: "matches",
  initialState,
  reducers: {
    setMatchesData: (state, action) => {
      state.matchesData = action.payload;
    },
  },
});

export const { setMatchesData } = matchesSlice.actions;
export const selectMatchesData = (state) => state.matches;

export default matchesSlice.reducer;
