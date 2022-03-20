import { configureStore } from "@reduxjs/toolkit";
import reservationSlice from "./features/reservationSlice";
export const store = configureStore({
  reducer: { reservations: reservationSlice }, // contain all reducers
});
