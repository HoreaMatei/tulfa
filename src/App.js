import { useState } from "react";
import "./App.css";
import CloseUpComponent from "./components/CloseUpComponent";

import VisualProd from "./components/VisualProd";
import Couch from "./components/Couch";
import TextComponent from "./components/TextComponent";
import ProductSilos from "./components/ProductSilos";
import LmsComponent from "./components/LmsComponent";

function App() {
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
      <button onClick={() => setOpened(true)}> open modal</button>
      <CloseUpComponent opened={opened} setOpened={setOpened} />
    </div>
  );
}

export default App;
