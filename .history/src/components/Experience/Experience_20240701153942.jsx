import React, { useEffect, useRef } from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        slider.scrollLeft += 2; // Adjust the scroll speed as needed
      }, 50); // Adjust the interval for smoother animation
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
  }, []);

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills : HARD-SKILLS</h2><br/><br/>
      <div className={styles.content}>
        <div className={styles.slider} ref={sliderRef}>
          <div className={styles.slideTrack}>
            {skills.map((skill, id) => (
              <div key={id} className={styles.slide}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
            ))}
          </div>
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
              <div className={styles.historyItemDetails}>
                <h3>{historyItem.role}</h3>
                <ul>
                  {historyItem.experiences.map((experience, id) => (
                    <li key={id}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
