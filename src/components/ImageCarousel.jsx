import bgImage1 from "../assets/Home Gallery/DSC02225.jpg";
import bgImage2 from "../assets/Home Gallery/DSC02383.jpg";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageCarousel() {
  const images = [bgImage1, bgImage2]; // change to storage retrieval and image name as string arr
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Cycle through images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const backgroundImage = images[currentImageIndex];

  return (
    <div className="opacity-20">
      <AnimatePresence>
        <motion.img
          key={currentImageIndex}
          src={images[currentImageIndex]}
          alt={`background ${currentImageIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-full object-cover"
        ></motion.img>
      </AnimatePresence>
    </div>
  );
}
