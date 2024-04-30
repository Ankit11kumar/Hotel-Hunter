import { SearchResultsProps } from "../../Interfaces/hotelsAndPlaces.interface";
import { Link } from "react-router-dom";
import "./searchResults.scss";
import StringWithHighlight from "../StringWithHighlight/stringWithHighlight";

const SearchResults = ({ heading, data, type, icon }: SearchResultsProps) => {
  return (
    <div>
      <div className="subHeadingGroup">
        <span className="subHeading">{heading}</span>
      </div>

      {data?.map((item) => (
        <Link to={`/${type}/${item.id}`} className="listItem" key={item.id}>
          <div className="listTitle">
            {icon}
            <span className="listText">
              <StringWithHighlight
                string={item?.description}
                matches={item?.matchedSubstrings}
              />
            </span>
            <br />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;
