import { useOutletContext } from "react-router-dom";
import css from "./Features.module.css";
import { nanoid } from "nanoid";

export default function Features() {
  const data = useOutletContext();

  // Проверка, что data не равен null или undefined
  if (!data) {
    return <div>Loading...</div>; // Или любое другое сообщение, пока данные загружаются
  }

  // Извлечение диапазона ключей
  const slicedEntries = Object.entries(data).slice(6, 12);

  return (
    <div>
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
      <div>
        <h3>Vehicle details</h3>
        <ul>
          {slicedEntries.map(([key, value]) => (
            <li key={nanoid()}>
              <span>{key}</span>
              <span>{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
