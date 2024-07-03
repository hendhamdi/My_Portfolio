import React, { useState } from "react";
import styles from "./Experiences.module.css";
import { getImageUrl } from "../../utils";


export const Experiences = () => {
  return( 
   <section className="global">
      <h2 className={styles.title}>My Experiences</h2>

  
     <section className={styles.container} id="exp">
        <div className={styles.content}>
         
          <p className={styles.description}>
                <h1 className={styles.stage1}> Stage de Fin d’Études - Ooredoo Siège social ,Tunis </h1><br/>Conception et développement d’une application mobile pour gérer les réservations des salles de
                 réunion au sein d’Ooredoo, avec un tableau de bord administrateur pour la gestion.<br/><br/>
                 <h1 className={styles.stage1}>Technologies utilisées :</h1>React, Redux, JS, API Rest, PostgreSQL, Redis, Figma.
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
        src={getImageUrl("experiences/home.png")}
        alt="Hero image of me"
        className={styles.expImg1}
      />
        <div className={styles.content1}>
         
          <p className={styles.description1}>
                <h1 className={styles.stage2}> Stage de Perfectionnement - STAR Siège social ,Tunis </h1><br/>Conception et développement de la partie frontend d’une plateforme en ligne facilitant la
communication entre l’expert et l’assuré, avec un tableau de bord administrateur pour la gestion.
<br/><br/>
                 <h1 className={styles.stage2}>Technologies utilisées :</h1> Html, Css, JS, Firebase.
                </p>
                <img
        src={getImageUrl("experiences/star-logo.png")}
        className={styles.logo1}
      />
        </div>
      
    </section>
     </section>
  );
};

   