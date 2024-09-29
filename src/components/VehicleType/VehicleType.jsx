import css from "./VehicleType.module.css";

export default function VehicleType() {
  return (
    <div className={css.typeContainer}>
      <h3 className={css.title}>Vehicle type</h3>
      <div className={css.filters}>
        <button className={css.button}>
          <img className={css.image} src="/bi_grid-1x2.svg" />
          <span className={css.description}>Van</span>
        </button>
        <button className={css.button}>
          <img className={css.image} src="/bi_grid.svg" />
          <span className={css.description}>Fully Integrated</span>
        </button>
        <button className={css.button}>
          <img className={css.image} src="/bi_grid-3x3-gap.svg" />
          <span className={css.description}>Alcove</span>
        </button>
      </div>
    </div>
  );
}
