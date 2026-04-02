import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MasonaryGrid from "../components/MasonaryGrid";
import { getAllImages } from "../lib/s3";

export default function LatestWorks() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getAllImages(["home-carousel", "misc"]).then(setImages);
  }, []);

  return (
    <div>
      <Header />
      <MasonaryGrid images={images} />
      <Footer />
    </div>
  );
}
