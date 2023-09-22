import logo from "./logo.svg";
import "./App.css";
// import { Comp1 } from "./Comp1";
// import { Comp2 } from "./Comp2";
import { useState } from "react";

function Comp1() {
  return (
    <div style={{ border: "2px solid black", margin: "5%", padding: "3%" }}>
      <p>Comp1</p>
      <p>Comp1</p>
      <p>Comp1</p>
    </div>
  );
}

function Comp2() {
  return (
    <div style={{ border: "2px solid black", margin: "5%", padding: "3%" }}>
      <p>Comp2</p>
      <p>Comp2</p>
      <p>Comp2</p>
    </div>
  );
}

function App() {
  let [Comp1Vis, setComp1Vis] = useState(false);
  let [Comp2Vis, setComp2Vis] = useState(false);

  const Comp1VisChanger = () => {
    setComp1Vis(!Comp1Vis);
  };

  const Comp2VisChanger = () => {
    setComp2Vis(!Comp2Vis);
  };

  return (
    <div className="App">
      <button onClick={Comp1VisChanger}>{Comp1Vis ? "Show" : "Hide"}</button>
      <button onClick={Comp2VisChanger}>{Comp2Vis ? "Show" : "Hide"}</button>
      <div style={{ display: "flex" }}>
        {Comp1Vis && <Comp1></Comp1>}
        {Comp2Vis && <Comp2></Comp2>}
      </div>
    </div>
  );
}

export default App;
