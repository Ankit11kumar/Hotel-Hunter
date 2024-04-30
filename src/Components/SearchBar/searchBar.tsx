import { useEffect, useState } from "react";
import useDebounce from "../../Hooks/useDebounce";
import "./searchBar.scss";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useAppDispatch } from "../../Redux/store";
import { fetchSearchedData } from "../../Redux/hotelsAndPlaces/actionCreators";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue, 1000);
  const dispatch = useAppDispatch();

  const handleChange = (e: { target: { value: string } }) => {
    const val = e.target.value;
    setSearchValue(val);
  };

  useEffect(() => {
    if(debouncedSearchValue)
      dispatch(fetchSearchedData(debouncedSearchValue));
  }, [debouncedSearchValue]);

  return (
    <div>
      {/* <FaMapMarkerAlt className="locationIcon" /> */}
      <input
        className="searchBar"
        type="text"
        placeholder="Search Hotels"
        value={searchValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
