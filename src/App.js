import React from 'react';
import './App.css';
import Body from './components/Body';
import { useEffect, useState } from "react";

const request = require('request');

function App() {

  const [muscleGroups, setMuscleGroup] = useState("")

  const muscleFetch = (e) => {
    e.preventDefault()

    let selectedMuscleGroup = e.target.title
    setMuscleGroup(selectedMuscleGroup)
  }

  console.log("Selected Muscle Group:", muscleGroups)

  useEffect(() => {
    let areas = document.querySelectorAll('area')
    // console.log("useEffect areas:", areas)

    areas.forEach(a => a.addEventListener("click", muscleFetch))

  },[])

let muscle = muscleGroups;
request.get({
  url: 'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle,
  headers: {
    'X-Api-Key': '71SAFB+B5it55gL7EqdLdA==fAi7p4KduUXQKLls'
  },
}, function(error, response, body) {
  if(error) return console.error('Request failed:', error);
  else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
  // else console.log()
});
  

  return (
    <div className='App'>
      <Body />
      {/* <img src= {human} /> */}
      <div>
        <div className='img-container'>
          {/* <img className='img2' alt='bodyImage' src= {human2} useMap="#image_map" />
          <img className='img' alt='bodyImage' src= {human} useMap="#image_map" /> */}
        </div>  
          <map name="image_map_joint_pain_exercises">
            <area alt="Knee" title="Knee" href="" coords="137,393,11" shape="circle" />
            <area alt="Knee" title="Knee" href="" coords="186,391,11" shape="circle" />
            <area alt="Ankle" title="Ankle" href="" coords="144,521,10" shape="circle" />
            <area alt="Ankle" title="Ankle" href="" coords="179,522,9" shape="circle" />
            <area alt="Hips" title="Hips" href="" coords="119,242,205,277" shape="rect" />
            <area alt="Wrist/Hand" title="Wrist/Hand" href="" coords="48,285,34" shape="circle" />
            <area alt="Wrist/Hand" title="Wrist/Hand" href="" coords="274,290,34" shape="circle" />
            <area alt="Shoulder" title="Shoulder" href="" coords="107,125,22" shape="circle" />
            <area alt="Shoulder" title="Shoulder" href="" coords="216,124,21" shape="circle" />
            <area alt="Upper Back" title="Upper Back" href="" coords="431,92,469,179" shape="rect" />
            <area alt="Lower Back" title="Lower Back" href="" coords="430,184,467,268" shape="rect" />
            <area alt="Neck" title="Neck" href="" coords="429,77,470,100" shape="rect" />
          </map>
        </div>
        <div>
          <map name="image_map_muscles">
            <area alt="Biceps" title="Biceps" href="" coords="91,161 113,152 110,173 98,196 86,195 87,176 " shape="polygon" data-muscle="biceps" onClick={muscleFetch()} />
            <area alt="Biceps" title="Biceps" href="" coords="214,152 228,156 235,173 234,197 215,178 " shape="polygon" />
            <area alt="Thighs" title="Legs" href="" coords="165,275,206,379" shape="rect" />
            <area alt="Thighs" title="Legs" href="" coords="118,274,150,381" shape="rect" />
            <area alt="Pectorals " title="Pectorals " href="" coords="134,123 188,124 209,153 162,168 115,153 " shape="polygon" />
            <area alt="Abdominals" title="Abdominals" href="" coords="138,170,185,270" shape="rect" />
            <area alt="Forearms" title="Forearms" href="" coords="81,204 101,218 69,263 56,257 " shape="polygon" />
            <area alt="Forearms" title="Forearms" href="" coords="240,204 268,258 256,265 220,213 " shape="polygon" />
            <area alt="Shoulders" title="Shoulders" href="" coords="214,130,17" shape="circle" />
            <area alt="Shoulders" title="Shoulders" href="" coords="107,110,17" shape="circle" />
            <area alt="Laterals" title="Laterals" href="" coords="404,118 418,131 431,159 450,174 472,156 483,130 492,117 468,119 450,128 429,118 " shape="polygon" />
            <area alt="Deltoids" title="Deltoids" href="" coords="401,157 411,191 427,221 449,195 472,224 486,194 497,157 476,160 454,177 446,179 422,159 " shape="polygon" />
            <area alt="Triceps" title="Triceps" href="" coords="379,155,401,200" shape="rect" />
            <area alt="Triceps" title="Triceps" href="" coords="501,154,523,198" shape="rect" />
            <area alt="Hamstrings" title="Hamstrings" href="" coords="407,307,440,377" shape="rect" />
            <area alt="Hamstrings" title="Hamstrings" href="" coords="456,304,493,386" shape="rect" />
            <area alt="Gluts" title="Gluts" href="" coords="413,304 409,270 430,257 450,255 480,261 491,275 486,302 469,293 454,281 449,277 443,283 429,293 " shape="polygon" />
          </map>
        </div>
    </div>
  );
}

export default App;