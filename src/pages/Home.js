import {
  Announcement,
  Navbar,
  Slider,
  Categories,
  Products,
} from "../components";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;
