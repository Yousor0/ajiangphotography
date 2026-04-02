import { motion, useMotionValue, useVelocity, useSpring } from "framer-motion";

function Letter({ letter, hoverY }) {
  const mouseX = useMotionValue(0);
  const velocityX = useVelocity(mouseX);
  const rotateTarget = useMotionValue(0);
  const rotate = useSpring(rotateTarget, { stiffness: 100, damping: 30 });

  function handleMouseMove(e) {
    mouseX.set(e.clientX);
    rotateTarget.set(Math.max(-30, Math.min(30, velocityX.get() / 11)));
  }

  function handleMouseLeave() {
    rotateTarget.set(0);
    mouseX.set(0);
  }

  return (
    <motion.span
      whileHover={{ y: hoverY, scale: 1.1 }}
      className="inline-block"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotate }}
    >
      {letter === " " ? "\u00A0" : letter}
    </motion.span>
  );
}

export default function AnimatedLetters({ text, className = "", hoverY = -5 }) {
  return (
    <>
      {text.split("").map((letter, i) => (
        <Letter key={i} letter={letter} hoverY={hoverY} />
      ))}
    </>
  );
}
