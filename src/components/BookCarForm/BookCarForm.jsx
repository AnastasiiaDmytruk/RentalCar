import React from "react";
import MyDatePicker from "../MyDatePicker/MyDatePicker.jsx";
import css from './BookCarForm.module.css'
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import toast from "react-hot-toast";


const initialValues = { name: '', email: "", date: null, message: "" }
  const validationSchema = Yup.object().shape({
    email: Yup.string()
    .trim()
    .lowercase()
    .email('Invalid email address')
    .required('Email is required')
    .test('Invalid email domain',
        (value) => {
            if (!value) return false;
            const parts = value.split('@');
            if (parts.length < 2) return false;
            return parts[1].includes('.') && parts[1].split('.').filter(Boolean).length > 1;
        }
    ),
    name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(40, 'Name must be at max 40 characters')
    .required('Name is required'),
  });
const toastStyles = {
    duration: 5000,
    style: {
        background: "#2563EB",
        color: "#FFFFFF",
        fontSize: "16px",
        padding: "16px",
        borderRadius: "12px",
    },
    iconTheme: {
        primary: "#FFFFFF",
        secondary: "#2563EB",
    },
};

const BookCarForm = ({id}) => {

  const handleSubmit = (values, { resetForm }) => {
    values.id = id;
 toast.success(`${values.name}, your rent confirmed! We will contact you soon.`, toastStyles);
        resetForm();
  }

  return <div className={css.wrapper}>
    <h2 className={css.title}>Book your car now</h2>
    <p className={css.text}>Stay connected! We are always ready to help you.</p>
    <Formik 
      validationSchema={validationSchema}
    initialValues={initialValues}
      onSubmit={handleSubmit}>
      
      <Form className={css.form}>
        
        <div className={css.fieldWrp
       }>
          <Field className={css.input} type="text" name="name" placeholder="Name*" />
          <ErrorMessage  className={css.error} name="name" component="span"/>
       </div>
        
        <div className={css.fieldWrp
       }>
          <Field className={css.input} type="email" name="email" placeholder="Email*" />
          <ErrorMessage  className={css.error} name="email" component="span"/>
        </div>
  
    <MyDatePicker  name="date"/>
        <Field className={css.input} as="textarea" name="message" placeholder="Comment" rows="4" />
          
    <button className={css.btn} type="submit">Send</button>
      </Form>
      </Formik>
  </div>;
};

export default BookCarForm;
