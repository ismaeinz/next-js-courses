import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const Blog = async () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={
            "https://images.pexels.com/photos/16958120/pexels-photo-16958120/free-photo-of-city-art-vintage-architecture.jpeg"
          }
          alt=""
          width={400}
          height={250}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{'item.title'}</h1>
        <p className={styles.desc}>{'item.desc'}</p>
      </div>
    </div>
  );
};

export default Blog;
