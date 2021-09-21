import HeaderHome from "./HeaderHome";
import SearchBar from "./SearchBar";
import Carousel from "./Carousel";
import TilesSection from "./TilesSection";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <div>
      <HeaderHome />
      <hr style={{ margin: 0, border: "0.5px solid" }} />
      <SearchBar />
      <Carousel />
      <TilesSection />
    </div>
  );
};

export default Home;
