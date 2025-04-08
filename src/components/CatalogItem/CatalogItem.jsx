import css from "./CatalogItem.module.css";

const CatalogItem = () => {
  return (
    <div className={css.container}>
      <div className={css.imgWrp}>
        <img src="" alt="" />
      </div>
      <div className={css.textWrp}>
        <p className={css.carName}></p>
        <p className={css.carPrice}></p>
        <ul className={css.carInfoList}>
          <li className={css.carInfoItem}></li>
          <li className={css.carInfoItem}></li>
          <li className={css.carInfoItem}></li>
          <li className={css.carInfoItem}></li>
          <li className={css.carInfoItem}></li>
        </ul>
      </div>
      <div className={css.btnWrp}>
        <button type="button">Read more</button>
      </div>
    </div>
  );
};

export default CatalogItem;
