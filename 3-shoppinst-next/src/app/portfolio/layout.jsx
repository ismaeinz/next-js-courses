import React from "react";
import styles from "./page.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.mainTitle}>
      Our Works
      {children}
    </div>
  );
}
