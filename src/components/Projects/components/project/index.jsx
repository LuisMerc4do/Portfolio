"use client";
import React from "react";
import styles from "./style.module.scss";

export default function index({ index, title, manageModal, type }) {
  return (
    <div
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className={styles.project}
    >
      <h2>{title}</h2>
      <h2>{type}</h2>
    </div>
  );
}
