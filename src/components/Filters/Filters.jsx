import LocationSwitcher from "../LocationSwitcher/LocationSwitcher";
import VehicleEquipment from "../VehicleEquipment/VehicleEquipment";
import VehicleType from "../VehicleType/VehicleType";
import css from "./Filters.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchFilterData } from "../../redux/filters/operations";
import { useSearchParams } from "react-router-dom";

export default function Filters() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const [filters, setFilters] = useState({
    AC: false,
    transmission: "",
    form: "",
    location: "",
    kitchen: false,
    TV: false,
    bathroom: false,
  });

  const handleSearchClick = () => {
    const activeFilters = Object.entries(filters)
      .filter(([key, value]) => value && value !== "")
      .reduce((acc, [key, value]) => {
        acc[key] = value === true ? "true" : value;
        return acc;
      }, {});

    setSearchParams(activeFilters);

    Object.keys(activeFilters).forEach((filter) => {
      dispatch(
        fetchFilterData({
          filterParam: filter,
          valueParam: activeFilters[filter],
        })
      );
    });
  };

  return (
    <div className={css.filterContainer}>
      <div className={css.selectorContainer}>
        <label className={css.locationLabel}>Location</label>
        <div>
          <LocationSwitcher filters={filters} setFilters={setFilters} />
        </div>
      </div>
      <div className={css.infoContainer}>
        <span className={css.filterLabel}>Filters</span>

        <VehicleEquipment filters={filters} setFilters={setFilters} />
        <VehicleType filters={filters} setFilters={setFilters} />

        <button className={css.button} onClick={handleSearchClick}>
          Search
        </button>
      </div>
    </div>
  );
}
