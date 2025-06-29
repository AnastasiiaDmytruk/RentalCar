import { useState } from "react";
import sprite from "../../assets/sprite.svg";
import css from "./CarPrice.module.css";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: -10 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
};

const CarPrice = ({ values, setFieldValue }) => {
  const [openList, setOpenList] = useState(false);
  const [choosePrice, setChoosePrice] = useState(null);

  const priceList = [30, 40, 50, 60, 70, 80];

  const handleClick = () => {
    setOpenList(!openList);
  };
  const handlePrice = (value) => {
    setChoosePrice(value);
    setFieldValue("rentalPrice", value);
  };

  return (
    <div className={css.wrapper}>
      <p className={css.label}>Price/ 1 hour</p>
      <button className={css.btnWrapper} onClick={handleClick} type="button">
        {choosePrice ?? "Choose a price "}

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
        {openList && (
          <motion.ul
            className={css.list}
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ willChange: "transform, opacity" }}>
            {priceList.map((price) => {
              const activeCar = values.rentalPrice === price;
              return (
                <li
                  key={price}
                  className={activeCar ? css.activeItem : css.item}>
                  <button
                    onClick={() => {
                      handleClick();
                      handlePrice(price);
                    }}
                    type="button">
                    {" "}
                    {price}
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

export default CarPrice;
