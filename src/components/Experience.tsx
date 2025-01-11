import React from "react";
import { motion } from "framer-motion";
import { fadeIn, headingMotion } from "../utils/motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";

type Experience = {
  title: string;
  company_name: string;
  icon: string;
  date: string;
  points: string[];
  tech: Tech[];
};

type Tech = {
  name: string;
  color: string;
};

const ExperienceCard: React.FC<{ experience: Experience }> = ({
  experience,
}) => (
  <motion.div variants={fadeIn()} className={styles.fullCard}>
    <div className={styles.cardInternal}>
      <div className="flex items-center space-x-4">
        <img src={experience.icon} className={styles.cardIcon} />
        <div className="flex flex-col">
          <h3 className={styles.cardHeadText}>{experience.title}</h3>
          <p className={styles.cardSubText} style={{ margin: 0 }}>
            {experience.company_name}
          </p>
          <p className={styles.cardText} style={{ margin: 0 }}>
            {experience.date}
          </p>
        </div>
      </div>
      <ul className={styles.cardList}>
        {experience.points.map((point, index) => (
          <li
            key={index}
            className={styles.cardText}
            style={{ marginTop: "2px" }}
          >
            {point}
          </li>
        ))}
      </ul>
      <div className={styles.cardPadding}>
        {experience.tech.map((tech) => (
          <p
            key={`${name}-${tech.name}`}
            className={`text-[14px] ${tech.color}`}
          >
            #{tech.name}
          </p>
        ))}
      </div>
    </div>
  </motion.div>
);

const Experience = () => {
  return (
    <section>
      <motion.div variants={headingMotion()}>
        <h2 className={styles.sectionHeadText}>Work experience</h2>
      </motion.div>

      <div className={styles.cardPadding}>
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Experience, "experience");
