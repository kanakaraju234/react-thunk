import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: "",
  credentials: {},
};

// Define the async thunk action creator
export const getLogin = createAsyncThunk("login", async (payload) => {
  console.log("payload: ", payload);
  try {
    const response = await axios.get(
      `http://localhost:8000/users_credentials?mail=${payload.email}`
    );
    if (response.data.length > 0) {
      const { password } = response.data[0];
      if (payload.password === password) {
        return response.data;
      } else {
        throw Error({ error: "you entered wrong credentials", status: 401 });
      }
    }
  } catch (error) {
    throw error;
  }
});

export const LoginReducer = createSlice({
  name: "credentials",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getLogin.fulfilled, (state, action) => {
      state.loading = false;
      console.log("action", action.payload, "state", state);
      state.credentials = { ...state.credentials, ...action.payload[0] };
    });
    builder.addCase(getLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default LoginReducer.reducer;
