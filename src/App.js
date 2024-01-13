import React, { useState } from 'react';
import './App.css';

function App() {
  const [Horizontal,setHorizontal] = useState(10)
  const [Vertical,setVertical] = useState(10)
  const [Blur,setBlur] = useState(10)
  const [Color,setColor] = useState("black")
  const [checkOn,setCheckOn] = useState("false")
  
  return (
    <div className="App">
     <div className='controls'>
        <label><strong>Horizontal Length</strong></label>
        <input type="range" min="-200" max="200" value={Horizontal} onChange = {(e) => setHorizontal(e.target.value)}/>
        <label><strong>Vertical Length</strong></label>
        <input type="range" min="-200" max="200" value={Vertical} onChange = {(e) => setVertical(e.target.value)}/>
        <label><strong>Blur Effect</strong></label>
        <input type="range" min="0" max="200" value={Blur} onChange = {(e) => setBlur(e.target.value)}/>
        <br />
        <label><strong>Color Effect: </strong></label>
        <input type="color" value={Color} onChange = {(e) => setColor(e.target.value)}/>
        <br />
        <br />
        <div className="switch">
          <label>
               Outline
          <input type="checkbox" checked={checkOn} onChange = {()=>setCheckOn(!checkOn)}/>
              <span className="lever"></span>
               Inset
         </label>
       </div>
     </div>
     <div className='output'>
        <div className='box' style={{boxShadow:` ${checkOn?"inset":" "} ${Horizontal}px ${Vertical}px ${Blur}px ${Color}`}}>
            <p>Box Shadow Generator: {Horizontal}px {Vertical}px {Blur}px {Color}</p>
        </div>
     </div>
    </div>
  );
}

export default App;
