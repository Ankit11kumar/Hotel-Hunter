import { SearchResultsProps } from "../../Interfaces/hotelsAndPlaces.interface";
import { renderTitleWithHighlight } from "../../Utils/helpers";
import { Link } from "react-router-dom";
import "./searchResults.scss";

const SearchResults = ({ heading, data, type, icon }: SearchResultsProps) => {
  return (
    <div>
      <div className="subHeadingGroup">
        <span className="subHeading">{heading}</span>
      </div>

      {data?.map((item) => {
        return (
          <>
            <Link to={`/${type}/${item.id}`} className="listItem">
              <div key={item.id} className="listTitle">
                {icon}
                <span className="listText">
                  {renderTitleWithHighlight(
                    item?.description,
                    item?.matchedSubstrings
                  )}
                </span>
                <br />
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default SearchResults;
