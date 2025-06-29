import { useDispatch, useSelector } from "react-redux";
import { selectPage, selectTotalPages } from "../../redux/filters/selectors.js";
import { incrementPage } from "../../redux/filters/slice.js";
import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);

  const handleClick = () => {
    dispatch(incrementPage());
  };
  return (
    <>
      {page < totalPages && (
        <button className={css.button} type="button" onClick={handleClick}>
          Load More
        </button>
      )}
    </>
  );
};

export default LoadMoreBtn;
