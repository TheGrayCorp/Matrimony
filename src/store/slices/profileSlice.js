import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profileData: null,
  status: "idle",
  error: [],
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    profileLoading: (state) => {
      state.status = "loading";
    },
    profileReceived: (state, action) => {
      state.status = "succeeded";
      state.profileData = action.payload;
    },
    profileError: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const { profileLoading, profileReceived, profileError } =
  profileSlice.actions;
export const selectUserProfile = (state) => state.profile;

export default profileSlice.reducer;
