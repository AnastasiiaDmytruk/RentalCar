import { useDispatch, useSelector } from "react-redux";
import css from "./CatalogItem.module.css";
import { toggleFavorite } from "../../redux/favorites/slice.js";
import { selectFavorites } from "../../redux/favorites/selectors.js";

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
  // console.log("favorites", favorites);
  const isFavorite = favorites.includes(id);

  const handleToggle = () => {
    dispatch(toggleFavorite(id));
  };

  return (
    <div className={css.container}>
      <div className={css.imgWrp}>
        <img src={img} alt={description} />
        <button onClick={handleToggle}>
          {isFavorite ? <svg></svg> : <svg></svg>}
        </button>
      </div>
      <div className={css.textWrp}>
        <p className={css.carName}>
          {brand}
          <span>{model}</span>, {year}
        </p>
        <p className={css.carPrice}>{rentalPrice}</p>
        <ul className={css.carInfoList}>
          <li className={css.carInfoItem}>{address}</li>
          <li className={css.carInfoItem}>{address}</li>
          <li className={css.carInfoItem}>{rentalCompany}</li>
          <li className={css.carInfoItem}>{type}</li>
          <li className={css.carInfoItem}>{mileage}</li>
        </ul>
      </div>
      <div className={css.btnWrp}>
        <button type="button">Read more</button>
      </div>
    </div>
  );
};

export default CatalogItem;
