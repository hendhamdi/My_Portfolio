import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";






export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
       <h1 className={`${styles.title} ${styles.typing}`}>Hi, I'm Hend!</h1>


        <p className={styles.description}>
         I am currently pursuing a Master’s degree in  Open<br/> Source Software Engineering, with a strong passion<br/> for interface design and frontend development.
        <br/><br/>Feel free to reach out if you'd like to learn more!
        </p>
       
     
       <a href="/Cv_Hend_Hamdi.pdf" className={styles.contactBtn} download="Mon_Cv.pdf">
    Download My CV
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
