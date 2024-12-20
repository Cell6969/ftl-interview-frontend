import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import dateRangeReducer from "./slice/dateRangeSlice";
import monthPickerReducer from "./slice/monthPickerSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    dateRange: dateRangeReducer,
    monthPicker: monthPickerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["dateRange/setDateRange"],
        ignoredActionPaths: [
          "payload.displayStartDate",
          "payload.displayEndDate",
        ],
        ignoredPaths: [
          "dateRange.displayStartDate",
          "dateRange.displayEndDate",
        ],
      },
    }),
});

export default store;
