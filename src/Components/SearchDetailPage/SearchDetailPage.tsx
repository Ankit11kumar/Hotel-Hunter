import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import "./SearchDetailPage.scss";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import { fetchSearchDetails } from "../../Redux/hotelsAndPlaces/actionCreators";

const SearchDetailPage: React.FC = () => {
  const { type, id } = useParams<{ type: string; id: string }>();
  const isHotel = type === "hotel";

  const {
    detailsData: placeDetails,
    loading,
    error,
  } = useAppSelector((state) => state.hotelsAndPlaces);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSearchDetails({ type, id }));
  }, []);

  return (
    <div>
      <h1>Place Details</h1>
      {placeDetails ? (
        <div>
          <h3>{isHotel ? placeDetails?.title : placeDetails?.name}</h3>
          {placeDetails?.description && <span>{placeDetails?.description}</span>}
          {placeDetails?.url && <a href={placeDetails?.url} target="_blank">{placeDetails?.url}</a>}
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
