import { useState, useEffect, useMemo } from "react";
import CatalogListPart from "../CatalogListPart/CatalogListPart";
import css from "./CatalogList.module.css";
import { fetchInfo } from "../../pagination";
import { filterData, isLoading, error } from "../../redux/filters/selectors";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

export default function CatalogList() {
  const [catalog, setCatalog] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setError] = useState(null);
  const [page, setPage] = useState(1);

  const perPage = 4;

  const getCatalog = async (page, append = false) => {
    setLoading(true);
    try {
      const data = await fetchInfo(page, perPage);
      setCatalog((prevCatalog) =>
        append ? [...prevCatalog, ...data.items] : data.items
      );
      setTotal(data.totalCampers);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCatalog(1);
  }, []);

  useEffect(() => {
    if (page > 1) {
      getCatalog(page, true);
    }
  }, [page]);

  const itemsCatalog = useSelector(filterData);
  const isLoadingFilter = useSelector(isLoading);
  const errorFilter = useSelector(error);

  const [searchParams] = useSearchParams();

  const acFilter = searchParams.get("AC") === "true";
  const tvFilter = searchParams.get("TV") === "true";
  const kitchenFilter = searchParams.get("kitchen") === "true";
  const bathroomFilter = searchParams.get("bathroom") === "true";
  const transmissionFilter = searchParams.get("transmission") === "automatic";
  const vehicleTypeFilter = searchParams.get("form");
  const locationFilter = searchParams.get("location");

  const filteredCatalog = useMemo(() => {
    if (!itemsCatalog) return [];
    return itemsCatalog.filter((catalogPart) => {
      if (acFilter && !catalogPart.AC) return false;
      if (tvFilter && !catalogPart.TV) return false;
      if (kitchenFilter && !catalogPart.kitchen) return false;
      if (bathroomFilter && !catalogPart.bathroom) return false;
      if (transmissionFilter && catalogPart.transmission !== "automatic")
        return false;
      if (vehicleTypeFilter && catalogPart.form !== vehicleTypeFilter)
        return false;
      if (locationFilter && catalogPart.location !== locationFilter)
        return false;
      return true;
    });
  }, [
    itemsCatalog,
    acFilter,
    tvFilter,
    kitchenFilter,
    bathroomFilter,
    transmissionFilter,
    vehicleTypeFilter,
    locationFilter,
  ]);

  if (isLoadingFilter) return <p>Loading...</p>;
  if (errorFilter) return <p>Error: {errorFilter}</p>;

  if (!filteredCatalog || filteredCatalog.length === 0) {
    return <p>No items found</p>;
  }

  if (errorMessage) {
    return <p>Error: {errorMessage}</p>;
  }

  return (
    <div>
      <ul className={css.list}>
        {catalog &&
          catalog.map((catalogPart) => (
            <li className={css.part} key={catalogPart.id}>
              <CatalogListPart
                id={catalogPart.id}
                title={catalogPart.name}
                rating={catalogPart.rating}
                location={catalogPart.location}
                description={catalogPart.description}
                reviews={catalogPart.reviews.length}
                price={catalogPart.price}
                image={catalogPart.gallery[0].thumb}
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
      {loading && <p>Loading...</p>}{" "}
      {!loading && page < Math.ceil(total / perPage) && (
        <button
          type="button"
          onClick={() => setPage((prevPage) => prevPage + 1)}
        >
          Load more
        </button>
      )}
    </div>
  );
}
