import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  email: string | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  email: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.email = null;
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;