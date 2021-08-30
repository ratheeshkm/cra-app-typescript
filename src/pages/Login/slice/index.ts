import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  loading: false,
  error: false,
  isLogin: false,
  name: '',
  clientid: '',
  email: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: state => ({
      ...state,
      loading: true,
    }),
    loginSuccess: (state, action) => ({
      ...state,
      isLogin: true,
    }),
  },
});

export const { login, loginSuccess } = userSlice.actions;
export default userSlice.reducer;
