import React from "react";
import { motion, useInView } from "framer-motion";
import { styles } from "../styles";
import { staggerSections } from "../utils/motion";

const SectionWrapper = <P extends object>(
  Component: React.ComponentType<P>,
  sectionId: string
): React.FC<P> => {
  return function HOC(props: P) {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <motion.section
        ref={ref}
        id={sectionId}
        variants={staggerSections()}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <Component {...props} />
      </motion.section>
    );
  };
};

export default SectionWrapper;
