import React from 'react'
import React, { useEffect, useState } from "react"

const App = () => {
  
  const [exercises, setExercises] = useState([])

  const fetchMuscleGroup = () => {
    fetch("https://api.api-ninjas.com/v1/exercises?muscle=${muscleGroups}")
    //
      .then(response => {
        return response.json()
      })
      .then(data => {
        setExercises(data)
      })
  }

  return (
    <div>
      Test
    </div>
  );
}

// export default function API_Call() {
//   return (
//     <div>API_Call</div>
//   )
// }
