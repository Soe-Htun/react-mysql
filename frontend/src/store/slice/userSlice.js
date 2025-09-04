import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: null, // store logged-in user info
  token: "",
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload.userInfo;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.userInfo = null;
      state.token = "";
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
