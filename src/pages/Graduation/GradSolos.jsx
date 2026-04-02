import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MasonaryGrid from "../../components/MasonaryGrid";
import { getImagesFromSubfolder } from "../../lib/s3";
import { useState, useEffect } from "react";

export default function GradSolos() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImagesFromSubfolder("graduation/solos").then(setImages);
  }, []);

  return (
    <div>
      <Header />
      <MasonaryGrid images={images} />
      <Footer />
    </div>
  );
}
