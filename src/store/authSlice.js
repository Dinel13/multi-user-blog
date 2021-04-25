import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  token: null,
  userId: null,
  name: null,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.token = action.payload.token;
      state.userId = action.payload.name;
      state.name = action.payload.name;
    },
    logout(state) {
      state.token = null;
      state.userId = null;
      state.name = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
