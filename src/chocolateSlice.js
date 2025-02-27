import { createSlice } from '@reduxjs/toolkit';

const chocolateSlice = createSlice({
  name: 'chocolate',
  initialState: {
    count: 0,
  },
  reducers: {
    increase: (state) => {
      state.count += 1;
    },
    decrease: (state) => {
      state.count -= 1;
    },
  },
});

export const { increase, decrease } = chocolateSlice.actions;
export default chocolateSlice.reducer;