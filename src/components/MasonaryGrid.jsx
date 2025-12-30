import { motion } from "framer-motion";

export default function MasonaryGrid({ link }) {
  const imageList = Object.values(link).map((image, index) => (
    <div className="mb-2 break-inside-avoid ">
      <motion.img
        whileHover={{ scale: 1.01, filter: "brightness(70%)" }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        key={image.default}
        src={image.default}
        alt={`Image ${index + 1}`}
        className="w-full block "
        loading="lazy"
        decoding="async"
      />
    </div>
  ));

  return (
    <div className="px-5 sm:px-20 pt-5" aria-label="Photo gallery">
      <div className="gap-2 space-y-4 columns-auto sm:columns-2 md:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5 ">
        {imageList}
      </div>
    </div>
  );
}
