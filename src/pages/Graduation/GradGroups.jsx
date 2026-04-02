import Footer from "../../components/Footer";
import Header from "../../components/Header";
import GroupMasonaryGrid from "../../components/GroupMasonaryGrid";
import { getImagesFromSubfolder } from "../../lib/s3";
import { useState, useEffect } from "react";

export default function GradGroups() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImagesFromSubfolder("graduation/groups").then(setImages);
  }, []);

  return (
    <div>
      <Header />
      <GroupMasonaryGrid images={images} />
      <Footer />
    </div>
  );
}
