import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarsWithParams } from "../../redux/cars/operations.js";
import CatalogItem from "../CatalogItem/CatalogItem.jsx";
import { selectCars } from "../../redux/cars/selectors.js";

const CatalogList = () => {
  const dispatch = useDispatch();
  const { cars } = useSelector(selectCars);
  // console.log("cars:", cars);

  useEffect(() => {
    dispatch(fetchCarsWithParams({}));
  }, [dispatch]);

  return (
    <div>
      {cars.map((car) => (
        <CatalogItem key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CatalogList;
