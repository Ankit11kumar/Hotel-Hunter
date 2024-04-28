import { SearchResultsProps } from '../../Interfaces/hotelsAndPlaces.interface';
import { renderTitleWithHighlight } from "../../Utils/helpers";
import "./searchResults.scss"

const SearchResults = ({heading, data, icon}: SearchResultsProps) => {
  return (
    <div>
        <div className="subHeadingGroup">
          <span className="subHeading">{heading}</span>
        </div>
    
      {data?.map((item) => {
        return (
          <div key={item.id} className="listTitle">
            {icon}
            <span>
              {renderTitleWithHighlight(
                item?.description,
                item?.matchedSubstrings
              )}
            </span>
            <br />
          </div>
        );
      })}</div>
  )
}

export default SearchResults