import { useState } from "react";
import css from "./LocationSwitcher.module.css";

export default function LocationSwitcher() {
  const [location, setLocation] = useState("");

  return (
    <div className={css.container}>
      <select
        className={css.selector}
        value={location}
        onChange={(evt) => setLocation(evt.target.value)}
      >
        <option value="" disabled>
          Select location
        </option>
        <option value="kyiv">Kyiv</option>
        <option value="poltava">Poltava</option>
        <option value="chernygyv">Chernigyv</option>
      </select>
    </div>
  );
}
