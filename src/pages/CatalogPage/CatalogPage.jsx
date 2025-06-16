import CatalogList from "../../components/CatalogList/CatalogList.jsx";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";


const CatalogPage = () => {
  return (
    <div>
      <SearchBar />
      <CatalogList />

    </div>
  );
};

export default CatalogPage;
