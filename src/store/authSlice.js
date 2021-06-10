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
      localStorage.removeItem("authUnhas");
      state.token = null;
      state.userId = null;
      state.name = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
