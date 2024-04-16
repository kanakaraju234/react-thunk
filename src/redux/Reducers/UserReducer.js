import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: "",
  users: {},
};

// Define the async thunk action creator
export const getUsers = createAsyncThunk("users/getUsers", async ({limit ,selectedPage}) => {
  console.log(limit, selectedPage, "limit and selectedPage");
  try {
    const response = await axios.get(`http://localhost:8000/users?_page=${selectedPage}&_per_page=${limit}`);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const signUp = createAsyncThunk("credentials", async (payload) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/users_credentials",
      { ...payload }
    );
    const res = response?.data;
    console.log("response", response);
    if (response.status == 201) {
      await axios.post("http://localhost:8000/users", {
        loginId: res?.id,
        name: res?.name,
        email: res?.email,
        phoneNumber: res?.phoneNumber,
      });
    }
    return res;
  } catch (error) {
    throw error;
  }
});

export const UserReducer = createSlice({
  name: "credentials",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      console.log("action", action.payload, "state", state);
      state.users={...action.payload};
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    //post call
    builder.addCase(signUp.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.loading = false;
      // state.users.push(action.payload);
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});
export default UserReducer.reducer;
