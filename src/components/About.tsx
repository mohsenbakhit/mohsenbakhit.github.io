import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, headingMotion } from "../utils/motion";
import { aboutInfo } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";

const About = () => {
  return (
    <section className="flex w-full max-w-5xl items-center justify-between">
      <div className="w-1/2 text-left">
        <motion.div variants={headingMotion()}>
          <h2 className={styles.sectionHeadText}>About me</h2>
        </motion.div>
        <motion.p
          variants={fadeIn()}
          className="mt-4 text-white text-[17px] leading-[30px]"
        >
          {aboutInfo.description}
        </motion.p>
      </div>
      <motion.div className="w-1/2 flex justify-end" variants={fadeIn()}>
        <img src={aboutInfo.picture} className="w-2/3 h-2/3 object-contain" />
      </motion.div>
    </section>
  );
};

export default SectionWrapper(About, "about");
