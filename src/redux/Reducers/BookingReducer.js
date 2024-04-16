import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: "",
  users: [],
};



export const BookingRequest = createAsyncThunk("bookingRequest", async (payload) => {
  // console.log("payload", payload);
  try {
    const response = await axios.post(
      "http://localhost:8000/bookingRequests",
      { ...payload }
    );
    const res = response?.data;
    console.log("response", response);
   
    return res;
  } catch (error) {
    throw error;
  }
});

export const BookingReducer = createSlice({
  name: "credentials",
  initialState,
  extraReducers: (builder) => {
    // builder.addCase(getUsers.pending, (state) => {
    //   state.loading = true;
    // });
    // builder.addCase(getUsers.fulfilled, (state, action) => {
    //   state.loading = false;
    //   console.log("action", action.payload, "state", state);
    //   state.users.push(...action.payload);
    // });
    // builder.addCase(getUsers.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.error.message;
    // });

    // //post call
    // builder.addCase(signUp.pending, (state) => {
    //   state.loading = true;
    // });
    // builder.addCase(signUp.fulfilled, (state, action) => {
    //   state.loading = false;
    //   // state.users.push(action.payload);
    // });
    // builder.addCase(signUp.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.error.message;
    // });
  },
});
export default BookingReducer.reducer;
