import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import css from './MyDatePicker.module.css';
import { addMonths } from "date-fns";
import { useState } from "react";

const MyDatePicker = ({ name }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(name);

  const [startDate, setStartDate] = useState(field.value??null);
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setFieldValue(name, dates)
  }

  return (
    <DatePicker
      selected={startDate}
      onChange={onChange}
      minDate={new Date()}
      maxDate={addMonths(new Date())}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      placeholderText="Booking date"
      dateFormat="dd MMMM yyyy"
      className={css.customInput}
      calendarClassName={css.customCalendar}
      popperPlacement="bottom"

      
    />
  );
};

  export default MyDatePicker;
