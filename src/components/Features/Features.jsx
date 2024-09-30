import { useOutletContext } from "react-router-dom";
import css from "./Features.module.css";
import { nanoid } from "nanoid";

export default function Features() {
  const data = useOutletContext();

  if (!data) {
    return <div>Loading...</div>;
  }

  const slicedEntries = Object.entries(data).slice(6, 12);

  return (
    <div className={css.features}>
      <div className={css.categories}>
        {data.ac && (
          <span className={css.buttonCategory}>
            <img className={css.categoryImage} src="/wind.svg" alt="AC Icon" />{" "}
            AC
          </span>
        )}
        <span className={css.buttonCategory}>
          <img
            className={css.categoryImage}
            src="/diagram.svg"
            alt="Transmission Icon"
          />{" "}
          {data.transmission}
        </span>
        <span className={css.buttonCategory}>
          <img
            className={css.categoryImage}
            src="/fuel-pump.svg"
            alt="Engine Icon"
          />{" "}
          {data.engine}
        </span>
        {data.kitchen && (
          <span className={css.buttonCategory}>
            <img
              className={css.categoryImage}
              src="/cup-hot.svg"
              alt="Kitchen Icon"
            />{" "}
            Kitchen
          </span>
        )}
        {data.tv && (
          <span className={css.buttonCategory}>
            <img className={css.categoryImage} src="/tv.svg" alt="TV Icon" /> TV
          </span>
        )}
        {data.bathroom && (
          <span className={css.buttonCategory}>
            <img
              className={css.categoryImage}
              src="/bi_droplet.svg"
              alt="Bathroom Icon"
            />
            Bathroom
          </span>
        )}
        {data.radio && (
          <span className={css.buttonCategory}>
            <img
              className={css.categoryImage}
              src="/radios.svg"
              alt="Radio Icon"
            />
            Radio
          </span>
        )}
      </div>
      <div className={css.properiesContainer}>
        <h3 className={css.propertiesTitle}>Vehicle details</h3>
        <ul className={css.listProperties}>
          {slicedEntries.map(([key, value]) => (
            <li key={nanoid()} className={css.listPropPart}>
              <span className={css.listPropValue}>{key}</span>
              <span className={css.listPropValue}>{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
