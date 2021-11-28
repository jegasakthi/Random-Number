import React, { useState } from 'react';
import './App.css';

function App(){
  const [minVa, setMinVa] = useState(0);
  const [maxVa, setMaxVa] = useState(10);
  const [randomNum, setRandomNum] = useState(5)

  const handleRandomNum = () =>{
    setRandomNum(Math.floor(Math.random()*(maxVa - minVa + 1) + minVa))
  }
  return(
  <div className= "App">
    <div className= "container">
      <div className= "randomNum">
        <p>
          Random number 
        <span>
             {randomNum}
          </span>
        </p>
      </div>
      <div className= "newContainer">
        <div>
          <p>Min</p>
          <input type= "number" value={minVa} onChange={e =>setMinVa(+e.target.value)}/>
        </div>
        <div>
          <p>Max</p>
          <input type= "number" value={maxVa} onChange={e => setMaxVa(+e.target.value)}/>
        </div>
      </div>
         <button onClick={handleRandomNum}> Get Random Number</button>
    </div>

  </div>
  )
}
export default App;
