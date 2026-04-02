import { useState, useEffect } from "react";
import { getImagesFromFolder } from "../lib/s3";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MasonaryGrid from "../components/MasonaryGrid";

export default function Travel() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImagesFromFolder(["travel"]).then(setImages);
  }, []);

  return (
    <div>
      <Header />
      <MasonaryGrid images={images} />
      <Footer />
    </div>
  );
}
