import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  loading: false,
  login: false,
  name: '',
  email: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: state => {
      state.loading = true;
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
