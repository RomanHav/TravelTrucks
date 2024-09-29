import { useDispatch, useSelector } from "react-redux";
import { fetchCatalogById } from "../../redux/itemInfo/operations";
import {
  catalogDataById,
  isLoading,
  error,
} from "../../redux/itemInfo/selectors";
import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import css from "./CatalogPartDescription.module.css";
import { nanoid } from "nanoid";
import clsx from "clsx";

export default function CatalogPartDescription() {
  const catalogId = useSelector(catalogDataById);
  const loading = useSelector(isLoading);
  const loadError = useSelector(error);
  const { catalogId: id } = useParams();

  const [data, setData] = useState(null);

  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCatalogById(id));
    dispatch(fetchCatalogById(id)).then((result) => setData(result.payload));
  }, [id, dispatch]);

  if (loading) return <p>Loading...</p>;
  if (loadError) return <p>Error: {loadError}</p>;

  if (!catalogId) {
    return <p>No item found</p>;
  }

  return (
    <div className={css.container}>
      <div className={css.descrContainer}>
        <div className={css.mainInfo}>
          <h2 className={css.title}>{catalogId.name}</h2>
          <div className={css.ratingInfo}>
            <Link className={css.ratingContainer} to="reviews">
              <img className={css.img} src="/rating.svg" alt="Rating Icon" />
              {catalogId.rating}({catalogId.reviews && catalogId.reviews.length}{" "}
              Reviews)
            </Link>
            <span className={css.ratingContainer}>
              <img className={css.img} src="/map.svg" alt="Location Icon" />
              {catalogId.location}
            </span>
          </div>
          <span className={css.price}>&euro;{catalogId.price}</span>
        </div>

        <ul className={css.galleryContainer}>
          {catalogId.gallery &&
            catalogId.gallery.map((catalogIdPart) => {
              return (
                <li className={css.galleryPart} key={nanoid()}>
                  <div
                    className={css.imageContainer}
                    style={{
                      backgroundImage: `url(${catalogIdPart.thumb})`,
                    }}
                  ></div>
                </li>
              );
            })}
        </ul>

        <p className={css.description}>{catalogId.description}</p>
      </div>
      <div>
        <nav className={css.navigation}>
          <NavLink className={buildLinkClass} to="features">
            Features
          </NavLink>
          <NavLink className={buildLinkClass} to="reviews">
            Reviews
          </NavLink>
        </nav>
        <Outlet context={data} />
      </div>
    </div>
  );
}
