import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

const Contact = () => {
  const listContacts = [
    {
      src: getImageUrl("contact/emailIcon.png"),
      link: "mailto:carteagachamorro@gmail.com",
      title: "GMail",
    },
    {
      src: getImageUrl("contact/githubIcon.png"),
      link: "https://github.com/carlos-daniel07",
      title: "GitHub",
    },
    {
      src: getImageUrl("contact/linkedinIcon.png"),
      link: "https://www.linkedin.com/in/carlos-daniel-arteaga-chamorro/",
      title: "LinkedIn",
    },
  ];

  return (
    <footer
      className={styles.container}
      id="contact">
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        {listContacts.map((contact, id) => {
          return (
            <li
              className={styles.link}
              key={id}>
              <img
                src={contact.src}
                alt={`${contact.title} logo`}
              />
              <a
                href={contact.link}
                target="_blank"
                rel="noreferrer">
                {contact.link.replace("mailto:", "")}
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};
export default Contact;
