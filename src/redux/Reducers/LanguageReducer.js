import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: "",
 language: [],
};

// Define the async thunk action creator
export const getLanguages = createAsyncThunk("language/getLanguages", async () => {
  try {
    const response = await axios.get("http://localhost:8000/languages");
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
});

// export const signUp = createAsyncThunk("credentials", async (payload) => {
//   // console.log("payload", payload);
//   try {
//     const response = await axios.post(
//       "http://localhost:8000/users_credentials",
//       { ...payload }
//     );
//     const res = response?.data;
//     console.log("response", response);
//     if (response.status == 201) {
//       await axios.post("http://localhost:8000/users", {
//         loginId: res?.id,
//         name: res?.name,
//         email: res?.email,
//         phoneNumber: res?.phoneNumber,
//       });
//     }
//     return res;
//   } catch (error) {
//     throw error;
//   }
// });
export const LanguageReducer = createSlice({
    name: " language",
    initialState,
    extraReducers: (builder) => {
      builder.addCase(getLanguages.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(getLanguages.fulfilled, (state, action) => {
        state.loading = false;
        console.log("action", action.payload, "state", state);
        state.users.push(...action.payload);
      });
      builder.addCase(getLanguages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });


    //post call
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
export default LanguageReducer.reducer;
