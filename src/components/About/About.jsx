import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

const About = () => {
  const aboutData = [
    {
      title: "Frontend developer",
      img: getImageUrl("about/cursorIcon.png"),
      alt: "Cursor",
      description:
        "Im a frontend developer with experience in building responsive and optimized sities",
    },
    {
      title: "Web Layout",
      img: getImageUrl("about/serverIcon.png"),
      alt: "Server Icon",
      description:
        "Im a frontend developer with experience in building responsive and optimized sities",
    },
    {
      title: "Ui Designer",
      img: getImageUrl("about/uiIcon.png"),
      alt: "Ui Icon",
      description: "I have designed landing page and have systems as well",
    },
  ];

  return (
    <section
      className={styles.container}
      id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Image About"
          className={styles.aboutImg}></img>
        <ul className={styles.aboutItems}>
          {aboutData.map((data) => (
            <li
              className={styles.aboutItem}
              key={data.title}>
              <img
                src={data.img}
                alt={data.alt}
              />
              <div className={styles.aboutItemText}>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default About;
