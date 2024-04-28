import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchData } from "../actions/searchAction";

interface DataState {
  data: { hotels: any[]; places: any[] };
  loading: boolean;
  error: string | null | undefined;
}

const initialState: DataState = {
  data: { hotels: [], places: [] },
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
