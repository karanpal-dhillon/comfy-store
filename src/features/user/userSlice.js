import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const themes = {
  winter: "winter",
  dracula: "dracula",
};

const loadThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme") || themes.winter;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

const loadUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("user")) || null;
};

const defaultState = {
  user: loadUserFromLocalStorage(),
  theme: loadThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState: defaultState,
  reducers: {
    loginUser: (state, action) => {
      const user = { ...action.payload.user, token: action.payload.jwt };
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },

    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
      toast.success("Logged out");
    },

    toggleTheme: (state) => {
      const { winter, dracula } = themes;
      const newTheme = state.theme === winter ? dracula : winter;
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    },
  },
});
export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;
export const selectUserTheme = (state) => state.user.theme;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
