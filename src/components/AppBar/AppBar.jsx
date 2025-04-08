import Navigation from "../Navigation/Navigation.jsx";
import css from "./AppBar.module.css";

const AppBar = () => {
  return (
    <header>
      <div className={css.container}>
        <svg width={104} height={16}>
          <use href="/src/assets/sprite.svg#icon-logo"></use>
        </svg>
        <Navigation />
      </div>
    </header>
  );
};

export default AppBar;
