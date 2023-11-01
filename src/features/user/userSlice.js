import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  user: { username: "karan" },
  theme: "winter",
};
const userSlice = createSlice({
  name: "user",
  initialState: defaultState,
  reducers: {
    loginUser: (state, action) => { },
    logoutUser: (state) => { },
    toggleTheme: (state) => { },
  },
});
export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;
export default userSlice.reducer;
