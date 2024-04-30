import SearchBar from "../SearchBar/searchBar";
import "./searchPage.scss";
import { FaMapMarkerAlt } from "react-icons/fa";
import { LiaHotelSolid } from "react-icons/lia";
import { PuffLoader } from "react-spinners";
import { useAppSelector } from "../../Redux/store";
import SearchResults from "../SearchResults/searchResults";

const SearchPage = () => {
  const {
    searchData: data,
    loading,
    error,
  } = useAppSelector((state) => state.hotelsAndPlaces);

  const renderSearchResults = () => {
    if (loading)
      return <PuffLoader color="#36d7b7" />
    if (error) return <div className="error">{error}</div>;
    if (data?.locations?.length || data?.hotels?.length)
      return (
        <div className="searchResults">
          {!!data?.locations?.length && (
            <SearchResults
              heading="Locations"
              data={data?.locations}
              type="places"
              icon={<FaMapMarkerAlt className="listIcon" />}
            />
          )}
          {!!data?.hotels?.length && (
            <SearchResults
              heading="Hotels"
              data={data?.hotels}
              type="hotel"
              icon={<LiaHotelSolid className="listIcon" />}
            />
          )}
        </div>
      );
  };

  return (
    <div className="search">
      <SearchBar />
      {renderSearchResults()}
    </div>
  );
};

export default SearchPage;
