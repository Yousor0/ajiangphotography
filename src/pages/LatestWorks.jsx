import Footer from "../components/Footer";
import Header from "../components/Header";
import MasonaryGrid from "../components/MasonaryGrid";

const images = import.meta.glob(`../assets/Gallery/*.{jpg,png}`, {
  eager: true,
});

export default function LatestWorks() {
  return (
    <div>
      <Header />
      <MasonaryGrid link={images} />
      <Footer />
    </div>
  );
}
