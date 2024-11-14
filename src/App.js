import { useState } from "react";
import "./App.css";
import CloseUpComponent from "./components/CloseUpComponent";

import VisualProd from "./components/VisualProd";
import Couch from "./components/Couch";
import TextComponent from "./components/TextComponent";
import ProductSilos from "./components/ProductSilos";
import LmsComponent from "./components/LmsComponent";

import SofaComponent from "./components/SofaComponent";
import ArmchairComponent from "./components/ArmchairComponent";
import LifestyleComponent from "./components/LifestyleComponent";
import CloseUpShotsComponent from "./components/CloseUpShotsComponent";
import SecondTextComponent from "./components/SecondTextComponent";
import Carousel from "./components/Carousel";
import HorizontalCarousel from "./components/HorizontalCarousel";
import CustomCarousel from "./components/HorizontalCarousel";
import SiloPopupComponent from "./components/SiloPopupComponent";
import LoremText from "./components/LoremText";

function App() {
  const instalationSlides = [
    "./instal/inst1.jpg",
    "./instal/inst2.jpg",
    "./instal/inst3.jpg",
    "./instal/inst4.jpg",
    "./instal/inst5.jpg",
    "./instal/inst6.jpg",
  ];

  const dimensionSlides = [
    "./dimensions/1.jpg",
    "./dimensions/2.jpg",
    "./dimensions/3.jpg",
    "./dimensions/4.jpg",
    "./dimensions/5.jpg",
    "./dimensions/6.jpg",
  ];

  const finalSlides = [];
  const [opened, setOpened] = useState(false);
  return (
    <div className="App">
      <video className="videoTag" autoPlay loop muted>
        <source src="./sample.mp4" type="video/mp4" />
      </video>
      {/* <VideoText /> */}
      <VisualProd />
      <Couch />
      <TextComponent />
      <ProductSilos />
      <LmsComponent />
      <SofaComponent />
      <ArmchairComponent />
      <LifestyleComponent />
      <CloseUpShotsComponent setOpened={setOpened} opened={opened} />
      <SecondTextComponent />

      <Carousel>
        {instalationSlides.map((s) => (
          <img className="slides" src={s} />
        ))}
      </Carousel>
      <SecondTextComponent />

      <Carousel>
        {dimensionSlides.map((s) => (
          <img className="slides" src={s} />
        ))}
      </Carousel>
      <SecondTextComponent />

      <video className="videoTag" autoPlay loop muted>
        <source src="./finalVideo.mp4" type="video/mp4" />
      </video>

      <div className="lorem_text_app">
        <LoremText />
      </div>
    </div>
  );
}

export default App;
