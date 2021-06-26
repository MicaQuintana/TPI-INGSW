import React, { useState, useCallback } from 'react';
import logo from './img/logo512.png';
import './App.css';
import { suma,resta , multi } from './Utils';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
        
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


function App() {
  const [numA, setNumA] = useState(0);
  const [numB, setNumB] = useState(0);
  const [total, setTotal] = useState(0);
  const [total1, setTotal1] = useState(0);
  const [total2, setTotal2] = useState(0);
  
  const calcularResultado = useCallback(() => {
    setTotal(suma(numA, numB));
    setTotal1(resta(numA,numB));
    setTotal2(multi(numA, numB));
  }, [numA, numB]);

  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Project by Micaela Quintana - Ing. Sw. UTN FRRe <br /><br /><br />
        </p>
        <div>
          <label>Numero A: </label>
          <input
            value={numA}
            style={{fontSize: 24, width: 100, textAlign: 'center'}}
            onChange={(e) => setNumA(+e.target.value)}
          />
        </div>
        <div>
          <label>Numero B: </label>
          <input
            value={numB}
            style={{fontSize: 24, width: 100, textAlign: 'center'}}
            onChange={(e) => setNumB(+e.target.value)}
          />
        </div>
        <div>
          <button
            style={{fontSize: 24, margin: '40px 0'}}
            onClick={calcularResultado}
          >
            Calcular
          </button>
        </div>
        <div>
          <label>suma: </label>
          <input
            value={total}
            style={{fontSize: 24, width: 100, textAlign: 'center', backgroundColor: 'white'}}
            disabled
            readOnly
          />
        </div>
        <div>
          <label>resta: </label>
          <input
            value={total1}
            style={{fontSize: 24, width: 100, textAlign: 'center', backgroundColor: 'white'}}
            disabled
            readOnly
          />
        </div>
        <div>
          <label>multiplicación: </label>
          <input
            value={total2}
            style={{fontSize: 24, width: 100, textAlign: 'center', backgroundColor: 'white'}}
            disabled
            readOnly
          />
        </div>
      
      </header>
    </div>
  );
}

export default App;
