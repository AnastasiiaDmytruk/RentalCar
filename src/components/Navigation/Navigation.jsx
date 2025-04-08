import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const activeLink = ({ isActive }) => clsx(css.link, isActive && css.active);
const Navigation = () => {
  return (
    <nav className={css.navigation}>
      <NavLink className={activeLink} to="/">
        Home
      </NavLink>
      <NavLink className={activeLink} to="/catalog">
        Catalog
      </NavLink>
    </nav>
  );
};

export default Navigation;
