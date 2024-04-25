import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

import cv_hend_hamdy from "./hero.cv_hend_hamdy.pdf"
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Hend</h1>
        <p className={styles.description}>
          I'm a full-stack developer and UI/UX desginer.<br/>I'm a third-year Bachelor’s degree student in Computer Systems Engineering. Reach out if you'd like to learn more!
        </p>
     
       <a href="./cv_hend_hamdy.pdf"   className={styles.contactBtn} download="cv_hend_hamdy.pdf">
        Download cv
        </a> 
       
        
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
