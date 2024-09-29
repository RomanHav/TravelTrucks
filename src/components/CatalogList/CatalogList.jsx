import { useDispatch, useSelector } from "react-redux";
import {
  catalogAllData,
  isLoading,
  error,
} from "../../redux/itemInfo/selectors";
import CatalogListPart from "../CatalogListPart/CatalogListPart";
import { useEffect } from "react";
import { fetchAllCatalogData } from "../../redux/itemInfo/operations";
import css from "./CatalogList.module.css";

export default function CatalogList() {
  const catalog = useSelector(catalogAllData);
  const loading = useSelector(isLoading);
  const loadError = useSelector(error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCatalogData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (loadError) return <p>Error: {loadError}</p>;

  if (!catalog || catalog.length === 0) {
    return <p>No items found</p>;
  }

  return (
    <ul className={css.list}>
      {catalog.map((catalogPart) => (
        <li key={catalogPart.id}>
          <CatalogListPart
            title={catalogPart.name}
            rating={catalogPart.rating}
            location={catalogPart.location}
            description={catalogPart.description}
            reviews={catalogPart.reviews.length}
            price={catalogPart.price}
            image={catalogPart.gallery[0].original}
            transmission={catalogPart.transmission}
            engine={catalogPart.engine}
            kitchen={catalogPart.kitchen}
            tv={catalogPart.TV}
            bathroom={catalogPart.bathroom}
            ac={catalogPart.AC}
          />
        </li>
      ))}
    </ul>
  );
}
