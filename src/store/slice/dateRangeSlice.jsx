import { createSlice } from "@reduxjs/toolkit";
import { format, startOfMonth, endOfMonth, isValid, isBefore } from "date-fns";

const validateRange = (startDate, endDate) => {
  if (!isValid(startDate) || !isValid(endDate)) {
    throw new Error("Invalid date format");
  }

  if (isBefore(endDate, startDate)) {
    throw new Error("End date must be after start date");
  }
};

const formatDateToString = (date) => {
  return format(date, "yyyy-MM-dd");
};

const initialState = {
  startDate: "2024-11-01",
  endDate: "2024-11-30",
  error: null,
  loading: false,
};

const dateRangeSlice = createSlice({
  name: "dateRange",
  initialState,
  reducers: {
    setDataRange: (state, action) => {
      try {
        const { startDate, endDate } = action.payload;
        validateRange(startDate, endDate);

        // formate date to string for api
        state.startDate = formatDateToString(startDate);
        state.endDate = formatDateToString(endDate);
      } catch (error) {
        state.error = error.message;
      }
    },
    resetDateRange: (state) => {
      state.startDate = formatDateToString(startOfMonth(new Date()));
      state.endDate = formatDateToString(endOfMonth(new Date()));
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

export const { setDataRange, resetDateRange, setLoading, setError } =
  dateRangeSlice.actions;
export const selectDateRange = (state) => state.dateRange;
export default dateRangeSlice.reducer;
