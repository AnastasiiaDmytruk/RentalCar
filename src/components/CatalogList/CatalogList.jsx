import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCars, selectIsLoading } from "../../redux/cars/selectors.js";
import { fetchAllCars } from "../../redux/cars/operations.js";
import CatalogItem from "../CatalogItem/CatalogItem.jsx";
import Loader from "../Loader/Loader.jsx";
import css from "./CatalogList.module.css";
import {
  selectFilters,
  selectLimit,
  selectPage,
} from "../../redux/filters/selectors.js";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.jsx";

const CatalogList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const loading = useSelector(selectIsLoading);
  const limit = useSelector(selectLimit);
  const page = useSelector(selectPage);
  // console.log("cars:", cars);

  const filters = useSelector(selectFilters);
  const payload = { ...filters, page, limit };

  useEffect(() => {
    dispatch(fetchAllCars(payload));
  }, [dispatch, page, filters]);

  return loading ? (
    <Loader />
  ) : (
    <div className={css.container}>
      {cars?.length > 0 ? (
        <>
          <ul className={css.list}>
            {cars.map((car) => (
              <li key={car.id} className={css.item}>
                <CatalogItem car={car} />
              </li>
            ))}
          </ul>
          <LoadMoreBtn />
        </>
      ) : (
        <h3 className={css.text}>
          No cars found. Please change filters and try again.
        </h3>
      )}
    </div>
  );
};

export default CatalogList;
