import React, { useEffect, useRef } from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  const sliderRef = useRef(null);
  const numSkills = skills.length;
  let index = 0;
  let intervalId = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    const startAutoScroll = () => {
      intervalId.current = setInterval(() => {
        index++;
        if (index >= numSkills) {
          index = 0;
          slider.scrollTo({
            left: index * slider.clientWidth,
            behavior: "smooth",
          });
        } else {
          slider.scrollTo({
            left: index * slider.clientWidth,
            behavior: "smooth",
          });
        }
      }, 3000); // Interval for auto-scrolling (adjust as needed)
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
