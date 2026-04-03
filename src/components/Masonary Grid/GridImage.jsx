import { useState } from "react";
import { motion, useMotionValue, useVelocity, useSpring } from "framer-motion";

export default function GridImage({ url, index, onClick }) {
  const [loaded, setLoaded] = useState(false);

  const mouseX = useMotionValue(0);
  const velocityX = useVelocity(mouseX);
  const rotateTarget = useMotionValue(0);
  const rotate = useSpring(rotateTarget, { stiffness: 100, damping: 30 });

  function handleMouseMove(e) {
    mouseX.set(e.clientX);
    rotateTarget.set(Math.max(-1.5, Math.min(1.5, velocityX.get() / 11)));
  }

  function handleMouseLeave() {
    rotateTarget.set(0);
    mouseX.set(0);
  }

  return (
    <motion.img
      whileHover={{
        scale: 1.03,
        translateY: -2,
        boxShadow: "0px 5px 5px rgba(0,0,0,0.1)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: loaded ? 1 : 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      src={url}
      alt={`Image ${index + 1}`}
      className="w-full block will-change-transform transform-gpu cursor-pointer"
      loading="lazy"
      decoding="async"
      onLoad={() => setLoaded(true)}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotate }}
    />
  );
}
