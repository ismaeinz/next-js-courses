import React from "react";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Image from "next/image";
import Button from "@/components/Button/Button";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={Hero} alt="" fill={true} className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quas
            tenetur, error ipsum ratione tempora cumque voluptate corporis
            praesentium repudiandae quisquam laudantium, laborum ad quasi!
            Ducimus quo sint totam. Veniam.
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1>Who Are We ?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            suscipit odio consectetur quis quae reprehenderit dolore distinctio?
            Voluptas dolorum quam odio optio temporibus nihil sequi, a,
            reprehenderit rerum eos numquam!
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum,
            similique perspiciatis incidunt voluptates dolorum aspernatur, neque
            soluta fugiat consectetur minus enim dignissimos veritatis
            temporibus recusandae et molestiae omnis voluptate corrupti.
          </p>
          <Button url={"contact"} text="Contact" />
        </div>
      </div>
    </div>
  );
}
