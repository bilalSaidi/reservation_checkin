import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: [
    { id: 0, username: "bilal saidi", numberDates: 3, startDate: "2/7/2022" },
  ],
};

export const reservationSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    addReservation: (state, action) => {
      state.value.push(action.payload);
    },
  },
});
export const { addReservation } = reservationSlice.actions;
export default reservationSlice.reducer;
