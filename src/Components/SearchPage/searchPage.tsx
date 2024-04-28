import { useSelector } from "react-redux";
import { RootState } from "../..";
import SearchBar from "../SearchBar/searchBar";
import "./searchPage.scss";
import renderTitleWithHighlight from "../../Utils/renderTitleWithHighlight";
import { FaMapMarkerAlt } from "react-icons/fa";
import { LiaHotelSolid } from "react-icons/lia";
import { PuffLoader } from "react-spinners";

const SearchPage = () => {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.data
  );
  return (
    <div className="search">
      <SearchBar />
      {loading ? (
        <PuffLoader color="#36d7b7" />
      ) : (
        <div className="searchResults">
          {data?.places?.length ? (
            <div className="subHeadingGroup">
              <span className="subHeading">Locations</span>
            </div>
          ) : null}
          {data?.places?.map((place) => {
            return (
              <div key={place?.placeID} className="listTitle">
                <FaMapMarkerAlt className="listIcon" />
                <span>
                  {renderTitleWithHighlight(
                    place?.title,
                    place?.matchedSubstrings
                  )}
                </span>
                <br />
              </div>
            );
          })}
          {data?.hotels?.length ? (
            <div className="subHeadingGroup">
              <span className="subHeading">Hotels</span>
            </div>
          ) : null}
          {data?.hotels?.map((hotel) => {
            return (
              <div key={hotel?.hotelID} className="listTitle">
                <LiaHotelSolid className="listIcon" />
                <span>
                  {renderTitleWithHighlight(
                    hotel?.title,
                    hotel?.matchedSubstrings
                  )}
                </span>
                <br />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
