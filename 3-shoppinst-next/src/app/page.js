import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better Design for your digital products
        </h1>
        <p className={styles.desc}>
          turning your idea into reality . we bring together the teams from the
          global tech industry
        </p>
        <button className={styles.button}>See Our Works</button>
      </div>
      <div className={styles.imgContainer}></div>
      <Image src={Hero} alt="Hero" className={styles.img} />
    </div>
  );
}
