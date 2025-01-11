import React from "react";
import { motion } from "framer-motion";
import { fadeIn, headingMotion } from "../utils/motion";
import { styles } from "../styles";
import { projects } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";

type Project = {
  name: string;
  description: string;
  tech: Tech[];
  image: string;
  source: string;
};

type Tech = {
  name: string;
  color: string;
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <motion.div
    variants={fadeIn()}
    className="bg-tertiary p-5 rounded-2xl w-[360px]"
  >
    <div className="relative w-full h-[230px]">
      <a href={project.source}>
        <img
          src={project.image}
          className="w-full h-full object-cover rounded-2xl"
        />
      </a>
    </div>

    <div className="mt-5">
      <h3 className={styles.cardHeadText}>{project.name}</h3>
      <p className={`${styles.cardText} mt-2`}>{project.description}</p>
    </div>

    <div className={styles.cardPadding}>
      {project.tech.map((tech) => (
        <p key={`${name}-${tech.name}`} className={`text-[14px] ${tech.color}`}>
          #{tech.name}
        </p>
      ))}
    </div>
  </motion.div>
);

const Project = () => {
  return (
    <section>
      <motion.div variants={headingMotion()}>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className={styles.cardPadding}>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} project={project} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Project, "project");
