import HeaderHome from "./HeaderHome";
import SearchBar from "./SearchBar";
import Carousel from "./Carousel";
import TilesSection from "./TilesSection";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <div style={{ position: "relative" }}>
      <SearchBar />
      <Carousel />
      <TilesSection />
    </div>
  );
};

export default Home;
