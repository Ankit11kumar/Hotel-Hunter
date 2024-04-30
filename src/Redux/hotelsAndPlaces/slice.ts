import { createSlice } from "@reduxjs/toolkit";
import { fetchSearchedData, fetchSearchDetails } from "./actionCreators";
import { SearchDataState } from "../../Interfaces/hotelsAndPlaces.interface";

export const initialState: SearchDataState = {
  searchData: { hotels: [], locations: [] },
  detailsData: null,
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
        state.searchData = action.payload;
        state.error = null;
      })
      .addCase(fetchSearchedData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchSearchDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.detailsData = action.payload;
        state.error = null;
      })
      .addCase(fetchSearchDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default hotelsAndPlacesSlice.reducer;
