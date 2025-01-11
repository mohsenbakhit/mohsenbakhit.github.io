import React from "react";
import { motion } from "framer-motion";
import { fadeIn, headingMotion } from "../utils/motion";
import { styles } from "../styles";
import { certs } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";

type Cert = {
  title: string;
  name: string;
  icon: string;
  date: string;
};

const CertCard: React.FC<{ cert: Cert }> = ({ cert }) => (
  <motion.div variants={fadeIn()} className={styles.halfCard}>
    <div className={styles.cardInternal}>
      <div className="flex items-center space-x-4">
        <img src={cert.icon} className={styles.cardIcon} />
        <div className="flex flex-col">
          <h3 className={styles.cardHeadText}>{cert.title}</h3>
          <p className={styles.cardSubText} style={{ margin: 0 }}>
            {cert.name}
          </p>
          <p className={styles.cardText} style={{ margin: 0 }}>
            Issue Date: {cert.date}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Certification = () => {
  return (
    <section>
      <motion.div variants={headingMotion()}>
        <h2 className={styles.sectionHeadText}>Certifications</h2>
      </motion.div>

      <div className={styles.cardPadding}>
        {certs.map((cert, index) => (
          <CertCard key={`cert-${index}`} cert={cert} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Certification, "certification");
