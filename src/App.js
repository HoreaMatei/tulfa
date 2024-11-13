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

function App() {
  const InstalationSlides = [
    "./instal/inst1.jpg",
    "./instal/inst2.jpg",
    "./instal/inst3.jpg",
    "./instal/inst4.jpg",
    "./instal/inst5.jpg",
    "./instal/inst6.jpg",
  ];
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
        {InstalationSlides.map((s) => (
          <img className="slides" src={s} />
        ))}
      </Carousel>
    </div>
  );
}

export default App;
