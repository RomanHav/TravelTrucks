import css from "./VehicleEquipment.module.css";

export default function VehicleEquipment() {
  return (
    <div className={css.equipmentContainer}>
      <h3 className={css.title}>Vehicle equipment</h3>
      <div className={css.filtersContainer}>
        <button className={css.button}>
          <img className={css.image} src="/wind.svg" alt="AC Image" />
          <span className={css.description}>AC</span>
        </button>
        <button className={css.button}>
          <img className={css.image} src="/diagram.svg" alt="Automatic Image" />
          <span className={css.description}>Automatic</span>
        </button>
        <button className={css.button}>
          <img className={css.image} src="/cup-hot.svg" alt="Kitchen Image" />
          <span className={css.description}>Kitchen</span>
        </button>
        <button className={css.button}>
          <img className={css.image} src="/tv.svg" alt="TV Image" />
          <span className={css.description}>TV</span>
        </button>
        <button className={css.button}>
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
