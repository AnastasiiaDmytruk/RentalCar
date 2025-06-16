import { useParams } from "react-router-dom";
import CarDetails from "../../components/CarDetails/CarDetails.jsx";
import { fetchCarById } from "../../redux/cars/operations.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const CarPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  

  
  useEffect(() => {
    dispatch(fetchCarById(id));
  }, [dispatch]);
  
  

  return <><CarDetails/></>


};

export default CarPage;
