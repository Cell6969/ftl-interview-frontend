import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  month: 4,
  year: 2024,
  error: null,
  loading: false,
};

const monthPickerSlice = createSlice({
  name: "monthPicker",
  initialState,
  reducers: {
    setMonthPicker: (state, action) => {
      state.month = action.payload.month;
      state.year = action.payload.year;
    },
    resetMonthPicker: (state) => {
      state.month = 3;
      state.year = 2024;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setMonthPicker, resetMonthPicker, setLoading, setError } =
  monthPickerSlice.actions;

export const selectMonthPicker = (state) => state.monthPicker;
export default monthPickerSlice.reducer;
