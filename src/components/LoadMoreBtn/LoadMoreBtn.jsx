import { useDispatch, useSelector } from "react-redux"
import { selectPage, selectTotalPages } from "../../redux/filters/selectors.js"
import { incrementPage } from "../../redux/filters/slice.js";

const LoadMoreBtn = () => {
    const dispatch = useDispatch();
    const page = useSelector(selectPage);
    const totalPages = useSelector(selectTotalPages);

    const handleClick = () => {
        dispatch(incrementPage());
}
  return (<>
    {page<totalPages &&   (<button type="button" onClick={handleClick}>Load More</button>)}
  </>
  )
}

export default LoadMoreBtn