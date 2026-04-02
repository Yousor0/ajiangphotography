import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getImagesFromFolder } from "../lib/s3";

export default function ImageCarousel() {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Get Images from AWS
  useEffect(() => {
    getImagesFromFolder("home-carousel").then(setImages);
  }, []);

  // Cycle through images every 5 seconds
  useEffect(() => {
    if (images.length === 0) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <div className="opacity-50">
      <AnimatePresence>
        <motion.img
          key={currentImageIndex}
          src={images[currentImageIndex]}
          alt={`background ${currentImageIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-full object-cover blur-xs"
        ></motion.img>
      </AnimatePresence>
    </div>
  );
}
