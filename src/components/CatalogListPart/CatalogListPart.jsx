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
}) {
  const truncateText = (text, length) => {
    return text.length > length ? text.slice(0, length) + "..." : text;
  };

  return (
    <div className={css.partContainer}>
      <div
        className={css.imageContainer}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div>
        <div>
          <div>
            <h2>{title}</h2>
            <div>
              <span>
                <img src="/rating.svg" alt="Rating Icon" />
                {rating}({reviews})
              </span>
              <span>
                <img src="/map.svg" alt="Location Icon" />
                {location}
              </span>
            </div>
          </div>
          <span>
            {price} <img src="/heart.svg" alt="Heart Icon" />
          </span>
        </div>

        <p>{truncateText(description, 58)}</p>

        <div>
          {ac && (
            <span>
              <img src="/wind.svg" alt="AC Icon" /> AC
            </span>
          )}
          <span>
            <img src="/diagram.svg" alt="Transmission Icon" /> {transmission}
          </span>
          <span>
            <img src="/fuel-pump.svg" alt="Engine Icon" /> {engine}
          </span>
          {kitchen && (
            <span>
              <img src="/cup-hot.svg" alt="Kitchen Icon" /> Kitchen
            </span>
          )}
          {tv && (
            <span>
              <img src="/tv.svg" alt="TV Icon" /> TV
            </span>
          )}
          {bathroom && (
            <span>
              <img src="/bi_droplet.svg" alt="Bathroom Icon" /> Bathroom
            </span>
          )}
        </div>

        <button>Show more</button>
      </div>
    </div>
  );
}
