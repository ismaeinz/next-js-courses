import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 ismaein Qasem. All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src="/2.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="linkedin Dev"
        />
        <Image
          src="/3.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="github Dev"
        />
      </div>
    </div>
  );
};

export default Footer;
