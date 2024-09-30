import css from "./VehicleType.module.css";

export default function VehicleType({ filters, setFilters }) {
  const handleFilterClick = (type) => {
    setFilters((prev) => ({
      ...prev,
      form: prev.form === type ? "" : type,
    }));
  };

  return (
    <div className={css.typeContainer}>
      <h3 className={css.title}>Vehicle type</h3>
      <div className={css.filters}>
        <button
          className={css.button}
          onClick={() => handleFilterClick("van")}
          style={{
            borderColor: filters.form === "van" ? "#e44848" : "#dadde1",
          }}
        >
          <img className={css.image} src="/bi_grid-1x2.svg" alt="Van" />
          <span className={css.description}>Van</span>
        </button>
        <button
          className={css.button}
          onClick={() => handleFilterClick("fullyIntegrated")}
          style={{
            borderColor:
              filters.form === "fullyIntegrated" ? "#e44848" : "#dadde1",
          }}
        >
          <img
            className={css.image}
            src="/bi_grid.svg"
            alt="Fully Integrated"
          />
          <span className={css.description}>Fully Integrated</span>
        </button>
        <button
          className={css.button}
          onClick={() => handleFilterClick("alcove")}
          style={{
            borderColor: filters.form === "alcove" ? "#e44848" : "#dadde1",
          }}
        >
          <img className={css.image} src="/bi_grid-3x3-gap.svg" alt="Alcove" />
          <span className={css.description}>Alcove</span>
        </button>
      </div>
    </div>
  );
}
