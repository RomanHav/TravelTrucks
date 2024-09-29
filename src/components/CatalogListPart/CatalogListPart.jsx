import { Link } from "react-router-dom";
import css from "./CatalogListPart.module.css";

export default function CatalogListPart({
  title,
  rating,
  location,
  description,
  reviews,
  price,
  image,
  transmission,
  engine,
  kitchen,
  tv,
  bathroom,
  ac,
  id,
}) {
  const truncateText = (text, length) => {
    return text.length > length ? text.slice(0, length) + "..." : text;
  };

  return (
    <div className={css.partContainer}>
      <div
        className={css.imageContainer}
        style={
          title === "Mavericks" || title === "Mesa" || title === "HI-Top Camper"
            ? { backgroundImage: `url(${image})`, backgroundPositionX: "25%" }
            : { backgroundImage: `url(${image})`, backgroundPositionX: "75%" }
        }
      ></div>
      <div className={css.mainContainer}>
        <div className={css.titleContainer}>
          <div className={css.titleContent}>
            <h2 className={css.title}>{title}</h2>
            <div className={css.iconsContainer}>
              <span className={css.rating}>
                <img className={css.img} src="/rating.svg" alt="Rating Icon" />
                {rating}({reviews} Reviews)
              </span>
              <span className={css.rating}>
                <img className={css.img} src="/map.svg" alt="Location Icon" />
                {location}
              </span>
            </div>
          </div>
          <div>
            <span className={css.price}>
              &euro;{price}
              <button className={css.likeButton}>
                <img className={css.heart} src="/heart.svg" alt="Heart Icon" />
              </button>
            </span>
          </div>
        </div>

        <p className={css.description}>{truncateText(description, 58)}</p>

        <div className={css.categories}>
          {ac && (
            <span className={css.buttonCategory}>
              <img
                className={css.categoryImage}
                src="/wind.svg"
                alt="AC Icon"
              />{" "}
              AC
            </span>
          )}
          <span className={css.buttonCategory}>
            <img
              className={css.categoryImage}
              src="/diagram.svg"
              alt="Transmission Icon"
            />{" "}
            {transmission}
          </span>
          <span className={css.buttonCategory}>
            <img
              className={css.categoryImage}
              src="/fuel-pump.svg"
              alt="Engine Icon"
            />{" "}
            {engine}
          </span>
          {kitchen && (
            <span className={css.buttonCategory}>
              <img
                className={css.categoryImage}
                src="/cup-hot.svg"
                alt="Kitchen Icon"
              />{" "}
              Kitchen
            </span>
          )}
          {tv && (
            <span className={css.buttonCategory}>
              <img className={css.categoryImage} src="/tv.svg" alt="TV Icon" />{" "}
              TV
            </span>
          )}
          {bathroom && (
            <span className={css.buttonCategory}>
              <img
                className={css.categoryImage}
                src="/bi_droplet.svg"
                alt="Bathroom Icon"
              />
              Bathroom
            </span>
          )}
        </div>

        <Link to={`/catalog/${id}/features`} className={css.showButton}>
          Show more
        </Link>
      </div>
    </div>
  );
}
