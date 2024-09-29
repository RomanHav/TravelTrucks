import CatalogList from "../CatalogList/CatalogList";
import Filters from "../Filters/Filters";
import css from "./Catalog.module.css";

export default function Catalog() {
  return (
    <div className={css.catalogContainer}>
      <Filters />
      <CatalogList />
    </div>
  );
}
