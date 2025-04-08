import { useDispatch } from "react-redux";
import CatalogList from "../../components/CatalogList/CatalogList.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import { useEffect } from "react";
import { fetchCarsByBrand } from "../../redux/cars/operations.js";

const CatalogPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCarsByBrand());
  }, [dispatch]);
  return (
    <div>
      <SearchBar />
      <CatalogList />
    </div>
  );
};

export default CatalogPage;
