import React, { useEffect, useRef, useState } from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);
  const numSkills = skills.length;
  const slideWidth = 150; // Largeur de chaque élément de compétence, ajustez selon vos besoins
  let intervalId = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    const startAutoScroll = () => {
      intervalId.current = setInterval(() => {
        setIndex((prevIndex) => {
          const newIndex = prevIndex + 1;
          return newIndex >= numSkills ? 0 : newIndex;
        });
      }, 3000); // Intervalle de défilement automatique en millisecondes (ajustez selon vos préférences)
    };

    const stopAutoScroll = () => {
      clearInterval(intervalId.current);
    };

    slider.addEventListener("mouseenter", stopAutoScroll);
    slider.addEventListener("mouseleave", startAutoScroll);

    startAutoScroll();

    return () => {
      slider.removeEventListener("mouseenter", stopAutoScroll);
      slider.removeEventListener("mouseleave", startAutoScroll);
      clearInterval(intervalId.current);
    };
  }, [numSkills]);

  useEffect(() => {
    const slider = sliderRef.current;
    slider.scrollTo({
      left: index * slideWidth,
      behavior: "smooth",
    });
  }, [index, slideWidth]);

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills : HARD-SKILLS</h2><br/><br/>
      <div className={styles.content}>
        <div className={styles.sliderContainer}>
          <div className={styles.slider} ref={sliderRef}>
            {skills.map((skill, id) => (
              <div key={id} className={styles.skill}>
                <img
                  src={getImageUrl(skill.imageSrc)}
                  alt={skill.title}
                  className={styles.skillImage}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
