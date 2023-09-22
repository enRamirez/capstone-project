import React from 'react';
import './App.css';
import Body from './components/Body';
import human from './components/Body.jpg'
import human2 from './components/Body2.jpg'
import { yellow } from '@mui/material/colors';


function App() {
  return (
    <div className='App'>
      <Body />
      {/* <img src= {human} /> */}
      <div>
        <div className='img-container'>
          <img className='img2' alt='bodyImage' src= {human2} useMap="#image_map" />
          <img className='img' alt='bodyImage' src= {human} useMap="#image_map" />
        </div>  
          <map name="image_map">
            <area alt="Knee" title="Knee" href="" coords="137,393,11" shape="circle" style={{backgroundColor: 'red', opacity: 0.7}} />
            <area alt="Knee" title="Knee" href="" coords="186,391,11" shape="circle" />
            <area alt="Ankle" title="Ankle" href="" coords="144,521,10" shape="circle" />
            <area alt="Ankle" title="Ankle" href="" coords="179,522,9" shape="circle" />
            <area alt="Hips" title="Hips" href="" coords="119,242,205,277" shape="rect" />
            <area alt="Wrist" title="Wrist" href="" coords="268,268,10" shape="circle" />
            <area alt="Wrist" title="Wrist" href="" coords="58,266,11" shape="circle" />
            <area alt="Shoulder" title="Shoulder" href="" coords="107,125,22" shape="circle" />
            <area alt="Shoulder" title="Shoulder" href="" coords="216,124,21" shape="circle" />
            <area alt="Upper Back" title="Upper Back" href="" coords="431,92,469,179" shape="rect" />
            <area alt="Lower Back" title="Lower Back" href="" coords="430,184,467,268" shape="rect" />
          </map>
        </div>
    </div>
  );
}

export default App;
