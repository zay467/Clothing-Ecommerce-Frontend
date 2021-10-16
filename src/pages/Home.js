import {
  Announcement,
  Navbar,
  Slider,
  Categories,
  Products,
  Newsletter,
  Footer,
} from "../components";
import styled from "styled-components";

const Container = styled.div``;

const Home = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Home;
