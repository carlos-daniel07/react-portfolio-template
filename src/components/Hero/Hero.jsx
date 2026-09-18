import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Hi , Im Daniel</h2>
        <p className={styles.description}>
          Im a frontend developer looking for my first job in a company, I use
          HTML, CSS, JavaScript and React JS. Reach out if youd like to learn
          more!
        </p>
        <a
          href="mailto:carteagachamorro@gmail.com"
          target="_blank"
          rel="noreferrer"
          className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image for Me"
        className={styles.heroImg}></img>
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
export default Hero;
