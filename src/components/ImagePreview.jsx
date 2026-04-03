import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faX,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import AnimatedLetters from "../animations/AnimatedLetters";
import { motion } from "framer-motion";

function OpenImage({ images, initialIndex, onClose }) {
  const [index, setIndex] = useState(initialIndex);
  const url = images[index];
  const hasPrev = index > 0;
  const hasNext = index < images.length - 1;

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(images.length - 1, i + 1));

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(0, i - 1));
      else if (e.key === "ArrowRight")
        setIndex((i) => Math.min(images.length - 1, i + 1));
      else if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [images.length, onClose]);

  return (
    <div className="fixed inset-0 bg-white z-200 grid  gap-4 pb-5 sm:pb-10 pt-15">
      {/* Header */}
      <div className="flex flex-col  items-center px-0 sm:flex-row sm:items-end sm:px-20 w-screen">
        <h1 className="text-6xl sm:text-6xl md:text-7xl font-bold uppercase text-left text-black">
          <AnimatedLetters
            text="Andrew Jiang"
            hoverY={-6}
            className="ease-in-out"
          />
        </h1>
        <motion.span
          className="flex cursor-pointer text-[#545454] items-center lowercase hover:text-white px-4 hover:bg-neutral-900 sm:ml-auto mt-5 sm:mt-0"
          whileHover={{ scale: 1.05, y: -3 }}
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faX} className="pr-1" />
          <span>close</span>
        </motion.span>
      </div>

      {/* Image  */}
      <img
        src={url}
        alt="Enlarged view"
        className="max-h-[80vh] max-w-[90vw]  sm:max-w-[75vw] object-contain mx-auto "
        onClick={(e) => e.stopPropagation()}
      />

      {/* Prev / Next */}
      <div className="flex items-center justify-center gap-5 px-10 sm:px-20">
        <motion.span
          className={`flex items-center lowercase pl-2 pr-4  ${hasPrev ? "cursor-pointer text-[#545454] hover:text-white hover:bg-neutral-900" : "text-neutral-300 cursor-default"}`}
          whileHover={hasPrev ? { scale: 1.05, y: -3 } : {}}
          onClick={prev}
        >
          <FontAwesomeIcon icon={faAngleLeft} /> prev
        </motion.span>
        <motion.span
          className={`flex items-center lowercase pr-2 pl-4  justify-end ${hasNext ? "cursor-pointer text-[#545454] hover:text-white hover:bg-neutral-900" : "text-neutral-300 cursor-default"}`}
          whileHover={hasNext ? { scale: 1.05, y: -3 } : {}}
          onClick={next}
        >
          next <FontAwesomeIcon icon={faAngleRight} />
        </motion.span>
      </div>
    </div>
  );
}

export default OpenImage;
