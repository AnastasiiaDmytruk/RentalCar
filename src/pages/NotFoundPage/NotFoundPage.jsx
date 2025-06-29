import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.errorCode}>404</h1>
      <h2 className={styles.message}>Oops! Page Not Found</h2>
      <p className={styles.description}>
        Sorry, the page you're looking for doesn't exist.
      </p>
      <button onClick={goHome} className={styles.button}>
        Go to Homepage
      </button>
    </div>
  );
};

export default NotFoundPage;
