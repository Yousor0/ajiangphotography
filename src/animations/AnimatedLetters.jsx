import { motion } from "framer-motion";

export default function AnimatedLetters({ text, className = "", hoverY = -5 }) {
  return (
    <>
      {text.split("").map((letter, i) => (
        <motion.span
          key={i}
          whileHover={{ y: hoverY, scale: 1.1 }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </>
  );
}
