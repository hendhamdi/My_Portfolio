import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (<div><div>
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <div className={styles.row}>
          <div className={styles.column}>
            <img
              src={getImageUrl("map.jpg")}
              alt="Map"
              style={{ width: "100%" }}
            />
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" className={styles.icons1}/>
          <a href="mailto:hendh0487@email.com">hendh0487@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
            className={styles.icons}
          />
          <a href="https://www.linkedin.com/in/hend-hamdi-6a9934243/">linkedin.com/hendhamdi</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" className={styles.icons}/>
          <a href="https://github.com/hendhamdi">github.com/hendhamdi</a>
        </li>
      </ul>
     
      
    </footer></div>
    
     <div className={styles.copyright1}><p className={styles.copyright}>copyright &copy; MyPortfolio.web.com 2024</p></div></div>
    
   
  );
};