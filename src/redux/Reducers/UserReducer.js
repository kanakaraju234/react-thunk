import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: "",
  users: [],
};

// Define the async thunk action creator
export const getUsers = createAsyncThunk("users/getUsers", async () => {
  try {
    const response = await axios.get("http://localhost:8000/users");
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const UserReducer = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users.push(...action.payload);
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
export default UserReducer.reducer;
