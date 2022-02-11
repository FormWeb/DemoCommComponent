import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import Value from './component/value/value';
import Button from './component/button/button';

function App() {

  const [val, setVal] = useState(0)

  const incrementVal = (incr) => {
    setVal(previous => previous + incr)
  }

  const resetVal = () => {
    setVal(0)
  }

  return (
    <div className="App">
      <Value value={val} />
      <Button clickIncrement={incrementVal} clickReset={resetVal} incr={1}/>
    </div>
  );
}

export default App;
