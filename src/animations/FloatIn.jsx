import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: (stagger = 0.15) => ({
    transition: {
      staggerChildren: stagger,
    },
  }),
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,

    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function FloatIn({
  children,
  className = "",
  stagger = 0,
  delay = 0,
}) {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      custom={stagger}
      transition={{ delay }}
    >
      {stagger ? (
        children.map((child, index) => (
          <motion.div key={index} variants={itemVariants}>
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={itemVariants}>{children}</motion.div>
      )}
    </motion.div>
  );
}
