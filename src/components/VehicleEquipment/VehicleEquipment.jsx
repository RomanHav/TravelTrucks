import css from "./VehicleEquipment.module.css";

export default function VehicleEquipment({ filters, setFilters }) {
  const handleFilterClick = (filterType) => {
    if (filterType === "transmission") {
      setFilters((prev) => ({
        ...prev,
        transmission: prev.transmission === "automatic" ? "" : "automatic",
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        [filterType]: !prev[filterType],
      }));
    }
  };

  return (
    <div className={css.equipmentContainer}>
      <h3 className={css.title}>Vehicle equipment</h3>
      <div className={css.filtersContainer}>
        <button
          className={css.button}
          onClick={() => handleFilterClick("AC")}
          style={{ borderColor: filters.AC ? "#e44848" : "#dadde1" }}
        >
          <img className={css.image} src="/wind.svg" alt="AC Image" />
          <span className={css.description}>AC</span>
        </button>
        <button
          className={css.button}
          onClick={() => handleFilterClick("transmission")}
          style={{
            borderColor:
              filters.transmission === "automatic" ? "#e44848" : "#dadde1",
          }}
        >
          <img className={css.image} src="/diagram.svg" alt="Automatic Image" />
          <span className={css.description}>Automatic</span>
        </button>
        <button
          className={css.button}
          onClick={() => handleFilterClick("kitchen")}
          style={{ borderColor: filters.kitchen ? "#e44848" : "#dadde1" }}
        >
          <img className={css.image} src="/cup-hot.svg" alt="Kitchen Image" />
          <span className={css.description}>Kitchen</span>
        </button>
        <button
          className={css.button}
          onClick={() => handleFilterClick("TV")}
          style={{ borderColor: filters.TV ? "#e44848" : "#dadde1" }}
        >
          <img className={css.image} src="/tv.svg" alt="TV Image" />
          <span className={css.description}>TV</span>
        </button>
        <button
          className={css.button}
          onClick={() => handleFilterClick("bathroom")}
          style={{ borderColor: filters.bathroom ? "#e44848" : "#dadde1" }}
        >
          <img
            className={css.image}
            src="/bi_droplet.svg"
            alt="Bathroom Image"
          />
          <span className={css.description}>Bathroom</span>
        </button>
      </div>
    </div>
  );
}
