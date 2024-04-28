import { createSlice } from "@reduxjs/toolkit";
import { fetchSearchedData } from "./actionCreators";
import { SearchDataState } from "../../Interfaces/hotelsAndPlaces.interface";

const initialState: SearchDataState = {
  data: { hotels: [], locations: [] },
  loading: false,
  error: null,
};

const hotelsAndPlacesSlice = createSlice({
  name: "hotelsAndPlaces",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchedData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchedData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchSearchedData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default hotelsAndPlacesSlice.reducer;
