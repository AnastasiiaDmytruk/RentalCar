import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import sprite from "../../assets/sprite.svg";
import { fetchCarBrands } from "../../redux/cars/operations.js";
import { selectBrands } from "../../redux/cars/selectors.js";
import css from "./CarBrand.module.css";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: -10 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
};

const CarBrand = ({ values, setFieldValue }) => {
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

        <motion.svg
          width={16}
          height={16}
          className={css.svg}
          animate={{ rotate: openList ? 180 : 0 }}
          transition={{ duration: 0.3 }}>
          <use href={`${sprite}#icon-arrow-down`} />
        </motion.svg>
      </button>
      <AnimatePresence>
        {brands.length > 0 && openList && (
          <motion.ul
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ willChange: "transform, opacity" }}
            className={css.list}>
            {brands.map((brand) => {
              const activeCar = values.brand === brand;
              return (
                <li
                  key={brand}
                  className={activeCar ? css.activeItem : css.item}>
                  <button
                    type="button"
                    onClick={() => {
                      handleClick();
                      handleBrand(brand);
                    }}>
                    {brand}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CarBrand;
