import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_ENDPOINTS, BASE_API_URL } from "../../Utils/constants";
import axios from "axios";
import { SearchData } from "../../Interfaces/hotelsAndPlaces.interface";

axios.defaults.baseURL = BASE_API_URL + API_ENDPOINTS.HOTELS_AND_PLACES;

export const fetchSearchedData = createAsyncThunk(
  "hotelsAndPlaces/fetchSearchedData",
  async (searchQuery: string): Promise<SearchData> => {
    const response = await axios({
      method: "GET",
      url: "/search",
      params: {
        query: searchQuery,
      },
    });
    return response.data;
  }
);

export const fetchSearchDetails = createAsyncThunk(
  "hotelsAndPlaces/fetchSearchDetails",
  async ({
    type,
    id,
  }: {
    type: string | undefined;
    id: string | undefined;
  }): Promise<any> => {
    const response = await axios({
      method: "GET",
      url: `/${type}/${id}`,
    });
    return response.data.data;
  }
);
