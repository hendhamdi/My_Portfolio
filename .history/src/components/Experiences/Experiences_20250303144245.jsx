import React, { useState } from "react";
import styles from "./Experiences.module.css";
import { getImageUrl } from "../../utils";


export const Experiences = () => {
  return( 
   <section className="global" id="experiences">
      <h2 className={styles.title}>My Experiences</h2>

  
     <section className={styles.container} id="exp">
        <div className={styles.content}>
         
          <p className={styles.description}>
                <h1 className={styles.stage1}> End-of-Studies Internship - Ooredoo Headquarters, Tunis </h1><br/>  Designed and
                 developed a 
                mobile application to manage meeting room reservations at Ooredoo, with an admin dashboard for management.<br /><br />
<br/>
                 <h1 className={styles.stage1}>Technologies used:</h1>React, Redux, JS, API Rest, PostgreSQL, Redis, Figma.
                </p>
        </div>
      <img
        src={getImageUrl("experiences/ooredoo-project.png")}
        alt="Hero image of me"
        className={styles.expImg}
      />
    </section>
     <section className={styles.container1} id="exp">
     <img
        src={getImageUrl("experiences/star.png")}
        alt="Hero image of me"
        className={styles.expImg1}
      />
        <div className={styles.content1}>
         
          <p className={styles.description1}>
                <h1 className={styles.stage2}> Advanced Internship - STAR Headquarters, Tunis</h1> <br/>
                Designed and developed the frontend of an online platform to facilitate communication
                 between experts and insured individuals, with an admin dashboard for management.
<br/><br/>
                 <h1 className={styles.stage2}>Technologies utilisées :</h1> Html, Css, JS, Firebase.
                </p>
               
        </div>
     
    </section>
     </section>
  );
};

   