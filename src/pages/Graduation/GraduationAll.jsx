import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MasonaryGrid from "../../components/Masonary Grid/MasonaryGrid";
import { getImagesFromSubfolder } from "../../lib/s3";
import { useState, useEffect } from "react";

export default function GraduationAll() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImagesFromSubfolder("graduation").then(setImages);
  }, []);

  const sortedImages = images.sort((a, b) => b.lastModified - a.lastModified);

  return (
    <div>
      <Header />
      <MasonaryGrid images={sortedImages} />
      <Footer />
    </div>
  );
}
