import React from "react";
import Header from "./components/Header";
import Card from "./components/Cards";
import { Container } from "./styles";
import Carousel from "./components/Carousel";
function App() {
  return (
    <Container>
      <Header />
      {/* <Carousel /> */}
      <Card />
    </Container>
  );
}

export default App;
