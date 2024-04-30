import React, { useState, useEffect, SetStateAction } from "react";
import { useParams } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { PuffLoader } from "react-spinners";
import "./SearchDetailPage.scss"

interface Place {
  data: SetStateAction<Place | null>;
  id: number;
  name: string;
  description: string;
  title: string;
}

const SearchDetailPage: React.FC = () => {
  const { type, id } = useParams<{ type: string; id: string }>();
  const [placeDetails, setPlaceDetails] = useState<Place | null>(null);
  const isHotel = type === "hotel";

  useEffect(() => {
    const fetchPlaceDetails = async () => {
      try {
        const response: AxiosResponse<Place> = await axios.get(`${type}/${id}`);
        console.log("response.data", response.data);
        setPlaceDetails(response.data.data);
      } catch (error) {
        console.error("Error fetching place details:", error);
      }
    };

    fetchPlaceDetails();
  }, [id]);

  return (
    <div>
      <h1>Place Details</h1>
      {placeDetails ? (
        <div>
          <h2>{isHotel ? placeDetails?.title : placeDetails?.name}</h2>
        </div>
      ) : (
        <div className="loader">
          <PuffLoader color="#36d7b7" />
        </div>
      )}
    </div>
  );
};

export default SearchDetailPage;
