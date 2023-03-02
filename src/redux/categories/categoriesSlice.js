import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    checkStatus: () => 'Sorry the following page is not redy for production',
  },
});

const { actions, reducer } = categorySlice;
export const { checkStatus } = actions;
export default reducer;
