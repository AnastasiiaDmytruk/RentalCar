import { useDispatch, useSelector } from "react-redux";
import css from "./CatalogItem.module.css";
import { toggleFavorite } from "../../redux/favorites/slice.js";
import { selectFavorites } from "../../redux/favorites/selectors.js";
import sprite from "../../assets/sprite.svg";
import { Link } from "react-router-dom";

const CatalogItem = ({ car }) => {
  const dispatch = useDispatch();
  const {
    id,
    brand,
    model,
    year,
    type,
    img,
    description,
    rentalPrice,
    rentalCompany,
    address,
    mileage,
  } = car;

  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.includes(id);

  const price = `$${rentalPrice}`;
  const city = address.split(",")[1];
  const country = address.split(",")[2];
  const formattedType = type
    ? type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()
    : "";
  const formattedMileage = `${mileage
    .toLocaleString("en-US")
    .replace(/,/g, " ")} km`;

  const handleToggle = () => {
    dispatch(toggleFavorite(id));
  };

  return (
    <div className={css.container}>
      <div className={css.imgWrp}>
        <img src={img} alt={description} className={css.img} />
        <button onClick={handleToggle} className={css.btn}>
          {isFavorite ? (
            <svg width={16} height={16} className={css.svgBlue}>
              <use href={`${sprite}#icon-heart`} />
            </svg>
          ) : (
            <svg width={16} height={16} className={css.svg}>
              <use href={`${sprite}#icon-heart`} />
            </svg>
          )}
        </button>
      </div>

      <div className={css.textWrp}>
        <div className={css.brandTextWrp}>
          <p className={css.carName}>
            {brand} <span className={css.spanCarModel}>{model}</span>, {year}
          </p>
          <p className={css.carPrice}>{price}</p>
        </div>
        <ul className={css.carInfoList}>
          <li className={css.carInfoItem}>{city}</li>
          <li className={css.carInfoItem}>{country}</li>
          <li className={css.carInfoItem}>{rentalCompany}</li>
          <li
            style={{ flexBasis: "100%", height: 0, pointerEvents: "none" }}
            aria-hidden="true"
          />
          <li className={css.carInfoItem}>{formattedType}</li>
          <li className={css.carInfoItem}>{formattedMileage}</li>
        </ul>
      </div>
      <div className={css.btnWrp}>
        <Link className={css.readMoreBtn} to={`/catalog/${id}`}>Read more</Link>
      </div>
    </div>
  );
};

export default CatalogItem;
