import React, { useEffect, useRef } from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  const sliderRef = useRef(null);
  const numSkills = skills.length;
  let index = 0;

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        index++;
        if (index >= numSkills) {
          index = 0;
          slider.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          slider.scrollTo({
            left: index * slider.clientWidth,
            behavior: "smooth",
          });
        }
      }, 3000); // Adjust the interval for smoother animation
    };

    const stopScrolling = () => {
      clearInterval(scrollInterval);
    };

    slider.addEventListener("mouseenter", stopScrolling);
    slider.addEventListener("mouseleave", startScrolling);

    startScrolling();

    return () => {
      slider.removeEventListener("mouseenter", stopScrolling);
      slider.removeEventListener("mouseleave", startScrolling);
      clearInterval(scrollInterval);
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
            {/* Repeat skills for infinite loop */}
            {skills.map((skill, id) => (
              <div key={id + numSkills} className={styles.skill}>
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
