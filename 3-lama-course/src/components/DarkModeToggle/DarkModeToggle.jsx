"use client";
import React from "react";
import styles from "./DarkModeToggle.module.css";
import { UseThemeContext } from "@/context/ThemeContext";
export default function DarkModeToggle() {
  const { toggle, mode } = UseThemeContext();

  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>GH</div>
      <div className={styles.icon}>D</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
}
