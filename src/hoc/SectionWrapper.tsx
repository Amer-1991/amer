import { motion } from "framer-motion";

interface Props {
  Component: React.ElementType;
  idName: string;
}

const SectionWrapper = (
  Component: Props["Component"],
  idName: Props["idName"]
) =>
  function HOC() {
    return (
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="section-y relative z-0"
        id={idName}
      >
        <div
          aria-hidden
          className="absolute left-0 right-0 top-0 -z-[1] mx-auto -mt-24 h-24"
          style={{ scrollMarginTop: "96px" }}
        />
        <div className="container-px">
          <Component />
        </div>
      </motion.section>
    );
  };

export default SectionWrapper;
