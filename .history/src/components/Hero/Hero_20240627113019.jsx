import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";



export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Hend</h1>
        <p className={styles.description}>
         I'm a Bachelor's degree in Computer Engineering,  <br/>frontend developer and UI desginer.<br/>Reach out if you'd like to learn more!
        </p>
       
     
       <a href="./cv_hend_hamdy.pdf"   className={styles.contactBtn} download="cv_hend_hamdy.pdf">
        Download cv
        </a> 
       
        
      </div>
      <img
        src={getImageUrl("hero/hend.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
