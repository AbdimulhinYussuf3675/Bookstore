import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    checkStatus: () => 'Kindly the following page is Under development',
  },
});

const { actions, reducer } = categorySlice;
export const { checkStatus } = actions;
export default reducer;
