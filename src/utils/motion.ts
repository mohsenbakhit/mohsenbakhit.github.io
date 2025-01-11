const headingMotion = () => {
    return {
      hidden: {
        y: -50,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 0.5,
          delay: 0.1,
        },
      },
    };
  };

const fadeIn = () => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
});
  
const staggerSections = () => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3, 
      delayChildren: 0.1,
    },
  },
});

export { headingMotion, fadeIn, staggerSections }