import {useState} from "react"

import './App.css';

const App = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
        <h1>Hiiii</h1>
        {/* <button onClick={() => setCount( count + 1)}>Increase Count</button> */}
        <button onClick={handleClick}>Increase Count</button>
        <p>{count}</p>
    </div>
    );
}
 
export default App;
