import { Link } from "react-router-dom";
import css from "./Home.module.css";

export default function Home() {
  return (
    <div className={css.homeContainer}>
      <div className={css.darkStyle}></div>
      <div className={css.content}>
        <div className={css.aboutContainer}>
          <h1 className={css.title}>Campers of your dreams</h1>
          <p className={css.description}>
            You can find everything you want in our catalog
          </p>
        </div>
        <Link className={css.button} to="/catalog">
          View Now
        </Link>
      </div>
    </div>
  );
}
