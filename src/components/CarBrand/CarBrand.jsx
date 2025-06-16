import { useDispatch, useSelector } from "react-redux";
import { selectBrands } from "../../redux/cars/selectors.js";
import { useEffect, useState } from "react";
import { fetchCarBrands } from "../../redux/cars/operations.js";
import css from "./CarBrand.module.css";
import sprite from "../../assets/sprite.svg";

const CarBrand = ({ values,setFieldValue }) => {
  const dispatch = useDispatch();
  const [openList, setOpenList] = useState(false);
  const [chooseBrand, setChooseBrand] = useState(null);

  const handleClick = () => {
    setOpenList(!openList);
  };
  const handleBrand = (value) => {
    setChooseBrand(value);
    setFieldValue("brand", value);
  };

  const brands = useSelector(selectBrands);
  useEffect(() => {
    dispatch(fetchCarBrands());
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      {" "}
      <p className={css.label}>Car brand</p>
      <button type="button" onClick={handleClick} className={css.btnWrapper}>
        {chooseBrand ?? "Choose a brand"}
        <svg width={16} height={16} className={css.svg}>
          <use
            href={`${sprite}#${openList ? "icon-arrow-up" : "icon-arrow-down"}`}
          />
        </svg>
      </button>
      {brands.length > 0 && openList && (
        <ul className={css.list}>
          {brands.map((brand) => {
            let activeCar = false;
            if (values.brand === brand) {
              activeCar = true;
            }
           return (
              <li  key={brand} className={activeCar? css.activeItem: css.item}>
                <button
                  onClick={() => {
                    handleClick();
                    handleBrand(brand);
                  }}
                  type="button">
                  {brand}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  );
};

export default CarBrand;
