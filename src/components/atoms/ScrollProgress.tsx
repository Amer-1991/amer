import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX, transformOrigin: "right" }}
      className="fixed left-0 right-0 top-0 z-[60] h-[3px] bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800"
    />
  );
};

export default ScrollProgress;
