import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
export default function Category({ params }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See more" url={"#"} />
        </div>

        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src={
              "https://images.pexels.com/photos/16958120/pexels-photo-16958120/free-photo-of-city-art-vintage-architecture.jpeg"
            }
            alt=""
          />
        </div>
      </div>
      {/*  */}
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See more" url={"#"} />
        </div>

        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src={
              "https://images.pexels.com/photos/16958120/pexels-photo-16958120/free-photo-of-city-art-vintage-architecture.jpeg"
            }
            alt=""
          />
        </div>
      </div>{" "}
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See more" url={"#"} />
        </div>

        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src={
              "https://images.pexels.com/photos/16958120/pexels-photo-16958120/free-photo-of-city-art-vintage-architecture.jpeg"
            }
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
