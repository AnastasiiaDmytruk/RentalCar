import { useState } from "react";
import sprite from "../../assets/sprite.svg";
import css from "./CarPrice.module.css";
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
        <svg width={16} height={16} className={css.svg}>
          <use
            href={`${sprite}#${openList ? "icon-arrow-up" : "icon-arrow-down"}`}
          />
        </svg>
      </button>
      {openList && (
        <ul className={css.list}>
          {priceList.map((price) => {
            let activeCar = false;
            if (values.rentalPrice === price) {
              activeCar = true;
            }
            return (
              <li key={price} className={activeCar ? css.activeItem : css.item}>
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
        </ul>
      )}
    </div>
  );
};

export default CarPrice;
