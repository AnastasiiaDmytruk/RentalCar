import { useSelector } from "react-redux";
import BookCarForm from "../BookCarForm/BookCarForm.jsx";
import { selectCurrentCar } from "../../redux/cars/selectors.js";
import css from "./CarDetails.module.css";
import sprite from "../../assets/sprite.svg";

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
    <div className={css.mainWrp}>
      <div className={css.leftSideWrp}>
        <img className={css.img} src={img} alt={description} />
        <BookCarForm id={id} />
      </div>
      <div  className={css.rightSideWrp}>
      <div className={css.wrapper}>
        <div className={css.brandTextWrp}>
          <p className={css.titleInfo}>
            {brand} <span >{model}</span>, {year} <span className={css.titleSpan}>Id: {formatedId}</span>
          </p>
        </div>
        <div className={css.locationWrp}>
          <svg 
            width={16}
            height={16}
          >
            <use href={`${sprite}#icon-location`} />
          </svg>
          <p className={css.info}>
            {city}, {country}
          </p>
          <p className={css.info}>Mileage: {formattedMileage}</p>
        </div>
        <p className={`${css.info} ${css.price}`}>{price}</p>
        <p  className={css.info}>{description}</p>
      </div>
    
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
              </li>);
                    
            
           
          })}
        </ul>
      </div>

      <div className={css.wrapper}>
        <h3 className={css.title}>Car Specifications:</h3>
        <ul className={css.ul}>
          <li className={css.li}>
            {" "}
            <svg>
              <use />
            </svg>{" "}
            Year: {year}
          </li>
          <li className={css.li}>
            {" "}
            <svg>
              <use />
            </svg>{" "}
            Type: {formattedType}
          </li>
  
          <li className={css.li}>
            {" "}
            <svg>
              <use />
            </svg>{" "}
            Fuel Consumption: {fuelConsumption}
          </li>
              <li className={css.li}>
            {" "}
            <svg>
              <use />
            </svg>{" "}
            Engine Size: {engineSize}
          </li>
        </ul>
      </div>
     
        <div className={css.wrapper}>
        <h3 className={css.title}>Accessories and functionalities:</h3>
        <ul className={css.ul}>
          {accessories.map((accessory) => {
            return(
            <li key={accessory} className={css.li}>
              <svg
                width={16}
                height={16}
                className={css.svg}>
                <use href={`${sprite}#icon-check-circle`} />
              </svg>
              {accessory}
            </li>)
         
          })}
          {functionalities.map((functionality) => {
            return(
            <li key={functionality} className={css.li}>
              <svg
                width={16}
                height={16}
                className={css.svg}>
                <use href={`${sprite}#icon-check-circle`} />
              </svg>
              {functionality}
            </li>)
         
          })}
        </ul>
      </div>


</div>
    </div>
  );
};

export default CarDetails;
