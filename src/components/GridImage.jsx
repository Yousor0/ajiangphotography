import { useState } from "react";
import { motion } from "framer-motion";

export default function GridImage({ url, index }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.img
      whileHover={{ scale: 1.03, translateY: -2 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: loaded ? 1 : 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      src={url}
      alt={`Image ${index + 1}`}
      className="w-full block will-change-transform transform-gpu"
      loading="lazy"
      decoding="async"
      onLoad={() => setLoaded(true)}
    />
  );
}
