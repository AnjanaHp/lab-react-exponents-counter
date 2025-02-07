import "./App.css";
import Counter from "./components/Counter";
import Exponent from "./components/Exponent";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";
import { useState } from "react";


function App() {
  const [count, setCount] = useState(0);
  const [power, setPower] = useState(0);

  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);

  const decPower = () => setPower((prevpower) => prevpower - 1);
  const incPower = () => setPower((prevpower) => prevpower + 1);

  return (
    <div className="App">
      <h2><em>Counter</em></h2>

      <Counter value={count} decrement={decrement} increment={increment} exponent={power} decPower={decPower} incPower={incPower} />
      <br />

      <h2><em>Exponents</em></h2>

      <div className="container">
        <Exponent value={count} exponent={power} />
      </div>

      <div className="container">
        <ExponentTwo value={count} />
        <ExponentThree value={count} />
        <ExponentFour value={count} />
        <ExponentFive value={count} />
        <ExponentSix value={count} />
      </div>
    </div>
  );
}

export default App;
