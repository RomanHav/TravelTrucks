import LocationSwitcher from "../LocationSwitcher/LocationSwitcher";
import VehicleEquipment from "../VehicleEquipment/VehicleEquipment";
import VehicleType from "../VehicleType/VehicleType";
import css from "./Filters.module.css";

export default function Filters() {
  return (
    <div className={css.filterContainer}>
      <div className={css.selectorContainer}>
        <label className={css.locationLabel}>Location</label>
        <div>
          <LocationSwitcher />
        </div>
      </div>
      <div className={css.infoContainer}>
        <span className={css.filterLabel}>Filters</span>
        <VehicleEquipment />
        <VehicleType />
        <button className={css.button}>Search</button>
      </div>
    </div>
  );
}
