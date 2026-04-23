import { motion } from "framer-motion";

interface Props {
  Component: React.ElementType;
  idName: string;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 90,
      damping: 18,
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const SectionWrapper = (
  Component: Props["Component"],
  idName: Props["idName"]
) =>
  function HOC() {
    return (
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={sectionVariants}
        className="section-y relative z-0"
        id={idName}
      >
        <div className="container-px">
          <Component />
        </div>
      </motion.section>
    );
  };

export default SectionWrapper;
