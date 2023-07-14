import { createSlice } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
  name: "login",
  initialState: {
    sections: {
      one: "Home",
      two: "About",
      three: "Contact",
    },
    name: null,
    login: true,
    cssSelector: false,
  },
  reducers: {
    changeToLogin(state, action) {
      state.login = action.payload;
    },
    changeToRegister(state, action) {
      state.login = action.payload;
    },
    changeToCSS(state, action) {
      state.cssSelector = !state.cssSelector;
    },
  },
});

export const { changeToLogin, changeToRegister, changeToCSS } =
  LoginSlice.actions;
export default LoginSlice.reducer;
