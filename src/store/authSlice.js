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
      const { token, userId, name } = action.payload;
      console.log(token, userId, name);
      localStorage.setItem(
        "authUnhas",
        JSON.stringify({
          token,
          userId,
          name,
        })
      );
      state.token = token;
      state.userId = userId;
      state.name = name;
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
