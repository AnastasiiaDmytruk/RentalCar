import Navigation from "../Navigation/Navigation.jsx";
import css from "./AppBar.module.css";
import sprite from "../../assets/sprite.svg";
import { Link } from "react-router-dom";

const AppBar = () => {
  return (
    <header className={css.container}>
      <Link to="/">
        <svg width={104} height={16}>
          <use href="/src/assets/sprite.svg#icon-logo"></use>
          <use href={`${sprite}#icon-logo`} />
        </svg>
      </Link>
      <Navigation />
    </header>
  );
};

export default AppBar;
