import React from "react";
import { motion } from "framer-motion";
import { fadeIn, headingMotion } from "../utils/motion";
import { styles } from "../styles";
import { educations } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";

type Education = {
  name: string;
  icon: string;
  degree: string;
  years: string;
  awards: string[];
  involvements: string[];
  courses: string[];
};

const EducationCard: React.FC<{ education: Education }> = ({ education }) => (
  <motion.div variants={fadeIn()} className={styles.fullCard}>
    <div className={styles.cardInternal}>
      <div className="flex items-center space-x-4">
        <img src={education.icon} className={styles.cardIcon} />
        <div className="flex flex-col">
          <h2 className={styles.cardHeadText}>{education.name}</h2>
          <h3 className={styles.cardSubText}>{education.degree}</h3>
          <h3 className={styles.cardText}>{education.years}</h3>
        </div>
      </div>
      <h4 className={`${styles.cardSubText} pt-4`}>Awards</h4>
      <ul className={styles.cardList}>
        {education.awards.map((award, index) => (
          <li
            key={index}
            className={styles.cardText}
            style={{ marginTop: "2px" }}
          >
            {award}
          </li>
        ))}
      </ul>
      <h4 className={`${styles.cardSubText} pt-4`}>Community Involvement</h4>
      <ul className={styles.cardList}>
        {education.involvements.map((involvement, index) => (
          <li
            key={index}
            className={styles.cardText}
            style={{ marginTop: "2px" }}
          >
            {involvement}
          </li>
        ))}
      </ul>
      <h4 className={`${styles.cardSubText} pt-4`}>Relevant Courses</h4>
      <ul className={styles.cardList}>
        {education.courses.map((course, index) => (
          <li
            key={index}
            className={styles.cardText}
            style={{ marginTop: "2px" }}
          >
            {course}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Education = () => {
  return (
    <section>
      <motion.div variants={headingMotion()}>
        <h2 className={styles.sectionHeadText}>Education</h2>
      </motion.div>
      <div className={styles.cardPadding}>
        {educations.map((education, index) => (
          <EducationCard key={`education-${index}`} education={education} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Education, "education");
