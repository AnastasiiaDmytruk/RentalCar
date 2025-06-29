import { useSelector } from "react-redux";
import sprite from "../../assets/sprite.svg";
import { selectCurrentCar } from "../../redux/cars/selectors.js";
import BookCarForm from "../BookCarForm/BookCarForm.jsx";
import css from "./CarDetails.module.css";

const CarDetails = () => {
  const car = useSelector(selectCurrentCar);
  if (!car) return;
  const {
    id,
    img,
    year,
    brand,
    model,
    type,
    address,
    description,
    rentalPrice,
    rentalConditions,
    mileage,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
  } = car;

  const price = `$${rentalPrice}`;
  const city = address.split(",")[1];
  const country = address.split(",")[2];
  const formattedType = type
    ? type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()
    : "";
  const formattedMileage = `${mileage
    .toLocaleString("en-US")
    .replace(/,/g, " ")} km`;
  const formatedId = id.slice(0, 4);

  return (
    <div className={css.container}>
      <div className={css.leftSideWrp}>
        <img className={css.img} src={img} alt={description} />
        <BookCarForm id={id} />
      </div>
      <div className={css.rightSideWrp}>
        {/* Basic Info */}
        <div>
          {/* Brand-Year-Id */}
          <div className={css.brandTextWrp}>
            <p className={css.titleInfo}>
              <span>{brand}</span>
              <span>{model}, </span>
              <span>{year} </span>
            </p>
            <p className={css.titleSpan}>Id: {formatedId}</p>
          </div>

          {/* Location-Mileage */}
          <div className={css.locationWrp}>
            <div className={css.locationWrp}>
              <p className={css.location}>
                {" "}
                <svg width={16} height={16}>
                  <use href={`${sprite}#icon-location`} />
                </svg>
                <span className={css.info}>
                  {city}, {country}
                </span>
              </p>
              <p className={css.info}> Mileage: {formattedMileage}</p>
            </div>
          </div>

          {/* Price */}
          <p className={`${css.price} ${css.price}`}>{price}</p>

          {/* Description */}
          <p className={css.info}>{description}</p>
        </div>

        {/* Conditions | Specifications | Accessories | Wrapper */}
        <div className={css.listWrp}>
          {/* Rental Conditions */}
          <div className={css.wrapper}>
            <h3 className={css.title}>Rental Conditions</h3>
            <ul className={css.ul}>
              {rentalConditions.map((condition) => {
                return (
                  <li key={condition} className={css.li}>
                    <svg
                      width={16}
                      height={16}
                      className={css.rentalConditionItemSvg}>
                      <use href={`${sprite}#icon-check-circle`} />
                    </svg>
                    {condition}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Car Specifications */}
          <div className={css.wrapper}>
            <h3 className={css.title}>Car Specifications:</h3>
            <ul className={css.ul}>
              <li className={css.li}>
                <svg width={16} height={16}>
                  <use href={`${sprite}#icon-calendar`} />
                </svg>
                <p>{`Year: ${year}`}</p>
              </li>
              <li className={css.li}>
                <svg className={css.icon} width={16} height={16}>
                  <use href={`${sprite}#icon-car`} />
                </svg>
                <p>{`Type: ${formattedType}`}</p>
              </li>

              <li className={css.li}>
                <svg width={16} height={16}>
                  <use href={`${sprite}#icon-fuel-pump`} />
                </svg>
                <p>{` Fuel Consumption: ${fuelConsumption}`}</p>
              </li>

              <li className={css.li}>
                <svg width={16} height={16}>
                  <use href={`${sprite}#icon-gear`} />
                </svg>
                <p>{`  Engine Size: ${engineSize}`}</p>
              </li>
            </ul>
          </div>

          {/* Accessories and functionalities */}
          <div className={css.wrapper}>
            <h3 className={css.title}>Accessories and functionalities:</h3>
            <ul className={css.ul}>
              {accessories.map((accessory) => {
                return (
                  <li key={accessory} className={css.li}>
                    <svg width={16} height={16} className={css.svg}>
                      <use href={`${sprite}#icon-check-circle`} />
                    </svg>
                    {accessory}
                  </li>
                );
              })}
              {functionalities.map((functionality) => {
                return (
                  <li key={functionality} className={css.li}>
                    <svg width={16} height={16} className={css.svg}>
                      <use href={`${sprite}#icon-check-circle`} />
                    </svg>
                    {functionality}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
