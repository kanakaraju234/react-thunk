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
      `https://translation-api-v1.onrender.com/users_credentials?mail=${payload.email}`
    );
    if (response?.data?.status === 200) {
      console.log("response: ", response);
      const { password } = response?.data?.data;
      if (payload?.password === password) {
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
      state.credentials = action.payload.data;
    });
    builder.addCase(getLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default LoginReducer.reducer;
