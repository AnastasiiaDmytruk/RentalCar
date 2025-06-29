import css from "./CarMileage.module.css";
const CarMileage = ({ values, setFieldValue }) => {
  const formatNumber = (value) => {
    if (!value) return "";
    return Number(value).toLocaleString("en-US");
  };

  const cleanNumber = (value) => {
    return value.replace(/,/g, "");
  };

  return (
    <div className={css.wrapper}>
      <p className={css.title}>Car mileage / km</p>
      <div className={css.inputWrp}>
        <label className={css.minLabel}>
          From
          <input
            className={css.input}
            name="minMileage"
            value={formatNumber(values.minMileage)}
            onChange={(e) => {
              const raw = cleanNumber(e.target.value);
              if (!/^\d*$/.test(raw)) return;
              setFieldValue("minMileage", raw);
            }}
          />
        </label>

        <label className={css.maxLabel}>
          To
          <input
            name="maxMileage"
            value={formatNumber(values.maxMileage)}
            onChange={(e) => {
              const raw = cleanNumber(e.target.value);
              if (!/^\d*$/.test(raw)) return;
              setFieldValue("maxMileage", raw);
            }}
          />
        </label>
      </div>
    </div>
  );
};

export default CarMileage;
