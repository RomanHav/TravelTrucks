import { useEffect } from "react";
import css from "./LocationSwitcher.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCatalogData } from "../../redux/itemInfo/operations";
import { catalogAllData } from "../../redux/itemInfo/selectors";

export default function LocationSwitcher({ filters, setFilters }) {
  const dispatch = useDispatch();
  const catalogLocation = useSelector(catalogAllData);

  useEffect(() => {
    dispatch(fetchAllCatalogData());
  }, [dispatch]);

  const uniqueLocations = catalogLocation
    .map((part) => part.location)
    .filter((loc, index, self) => self.indexOf(loc) === index);

  const handleLocationChange = (evt) => {
    const selectedLocation = evt.target.value;
    setFilters((prev) => ({
      ...prev,
      location: selectedLocation,
    }));
  };

  return (
    <div className={css.container}>
      <select
        className={css.selector}
        value={filters.location}
        onChange={handleLocationChange}
      >
        <option value="">Select location</option>
        {uniqueLocations.map((loc, index) => (
          <option value={loc} key={index}>
            {loc}
          </option>
        ))}
      </select>
    </div>
  );
}
