import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
  "data/fetchData",
  async (debouncedSearchValue: string) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/search-places-and-hotels?name=${debouncedSearchValue}`
    );
    const data = await response.json();
    return data;
  }
);
