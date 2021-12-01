import React, { Component } from "react";
import styles from "./ButtonLoader.module.scss";
import { FaSpinner } from "react-icons/fa";

export default function ButtonLoader(props) {
  const { loading, fetchData } = props;

  return (
    <div>
      <button className={styles.button} onClick={fetchData} disabled={loading}>
        {loading && <FaSpinner icon="spinner" className={styles.spinner} />}
        {loading}
        {!loading && <span>SIGN UP</span>}
      </button>
    </div>
  );
}
