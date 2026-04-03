import { useState, useEffect } from "react";
import { getImagesFromFolder } from "../lib/s3";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MasonaryGrid from "../components/Masonary Grid/MasonaryGrid";

export default function People() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImagesFromFolder(["people"]).then(setImages);
  }, []);

  return (
    <div>
      <Header />
      <MasonaryGrid images={images} />
      <Footer />
    </div>
  );
}
