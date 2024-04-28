import { useEffect, useState } from "react";
import useDebounce from "../../Hooks/useDebounce";
import { fetchData } from "../../Redux/actions/searchAction";
import { AppDispatch, useAppDispatch } from "../..";
import "./searchBar.scss";
import { FaMapMarkerAlt } from "react-icons/fa";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue, 1000);
  const dispatch: AppDispatch = useAppDispatch();

  const handleChange = (e: { target: { value: string } }) => {
    const val = e.target.value;
    setSearchValue(val);
  };

  const fetchHotelData = async (debouncedSearchValue: string) => {
    await dispatch(fetchData(debouncedSearchValue));
  };

  useEffect(() => {
    fetchHotelData(debouncedSearchValue);
  }, [debouncedSearchValue]);

  return (
    <div>
      <FaMapMarkerAlt className="locationIcon" />
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
