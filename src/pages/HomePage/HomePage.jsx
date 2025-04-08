import { NavLink } from "react-router-dom";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Find your perfect rental car</h1>
      <p className={css.text}>
        Reliable and budget-friendly rentals for any journey
      </p>
      {/* <button className={css.btn} type="button">
        View Catalog
      </button> */}
      <NavLink className={css.btn} to="/catalog">
        View Catalog
      </NavLink>
    </div>
  );
};

export default HomePage;
