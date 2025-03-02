import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";



export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Hend</h1>
        <p className={styles.description}>
         I am pursuing a Master’s degree in Open Source<br/> Software Engineering, with a strong passion for <br/>full-stack development and UI/UX design.
        <br/>Reach out if you'd like to learn more!
        </p>
       
     
       <a href="../../assets/hero/Cv1.pdf" className={styles.contactBtn} download="Mon_Cv.pdf">
    Download My Cv
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
