import { Form, Formik } from "formik";
import css from "./SearchBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../../redux/filters/selectors.js";
import CarBrand from "../CarBrand/CarBrand.jsx";
import CarPrice from "../CarPrice/CarPrice.jsx";
import CarMileage from "../CarMileage/CarMileage.jsx";
// import { fetchAllCars } from "../../redux/cars/operations.js";
import { setFilters } from "../../redux/filters/slice.js";

const SearchBar = () => {
  const dispatch= useDispatch()
  const filters = useSelector(selectFilters);

      const normalizeValues = (values) => {
        return Object.fromEntries(
            Object.entries(values).map(([key, value]) => [
            key,
            (typeof value === 'string' && value.trim() === '') ? null : value,
            ])
        );
      };
  
  const handleSubmit = (values) => {
    
    const newPrice = values.rentalPrice;
    values.rentalPrice = Number(newPrice);

      const payload = normalizeValues(values);

    dispatch(setFilters(payload));
    
  }


  return (
    <div className={css.searchBarWrp}>
      <Formik onSubmit={handleSubmit}  initialValues={filters}>
        {({ values, setFieldValue }) => (
          <Form className={css.form}>
            <CarBrand values={values} setFieldValue={setFieldValue} />
            <CarPrice values={values} setFieldValue={setFieldValue} />
            <CarMileage values={values} setFieldValue={setFieldValue} />
            <button className={css.btn} type="submit" >Search</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearchBar;
