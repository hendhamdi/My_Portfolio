import React, { useState } from "react";
import styles from "./Experiences.module.css";
import { getImageUrl } from "../../utils";


export const Experiences = () => {
  return( 
     <section className={styles.container} id="exp">
        <h2 className={styles.title}>My Experiences</h2>
     </section>
  );
};