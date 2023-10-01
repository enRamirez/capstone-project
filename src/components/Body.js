import React, { useState } from 'react';
import './Body.css';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import human from '../components/Body.jpg';
import human2 from '../components/Body2.jpg';

const Body = () => {
  const [selectedOption, setSelectedOption] = useState('Joint Pain Exercises');

  const toggleOption = () => {
    setSelectedOption(selectedOption === 'Joint Pain Exercises' ? 'Muscle Strength' : 'Joint Pain Exercises');
  };

  const handleChange = (event, newAlignment) => {
    setSelectedOption(newAlignment);
  };

  return (
    <div className='main'>
      <h1 className='title'>Select Your Body Focus</h1>

      {/* <div className='toggle-container'>
        <button className='workoutToggle' onClick={toggleOption}>
          Toggle: {selectedOption}
        </button>
      </div> */}

      <ToggleButtonGroup
        color="primary"
        value={selectedOption}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton
          value="Joint Pain Exercises"
          style={{
            backgroundColor: selectedOption === 'Joint Pain Exercises' ? '#ff0000' : '#cccccc', 
            color: selectedOption === 'Joint Pain Exercises' ? '#ffffff' : '#000000', 
          }}
        >
          Joint Pain Exercises
        </ToggleButton>
        <ToggleButton
          value="Muscle Strength"
          style={{
            backgroundColor: selectedOption === 'Muscle Strength' ? '#ff0000' : '#cccccc', 
            color: selectedOption === 'Muscle Strength' ? '#ffffff' : '#000000', 
          }}
        >
          Muscle Strength
        </ToggleButton>
      </ToggleButtonGroup>

      <div>    
        {selectedOption === 'Joint Pain Exercises' ? (
          <img className='img2' partName={`${selectedOption} - ${selectedOption}`} alt='bodyImage' src={human2} useMap="#image_map_joint_pain_exercises" />
        ) : (
          <img className='img' partName={`${selectedOption} - ${selectedOption}`} alt='bodyImage' src={human} useMap="#image_map_muscles" />
        )}
      </div>

    </div>
  );
};

export default Body;











// import React, { useState, useEffect } from 'react';
// import './Body.css';
// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// import human2 from '../components/Body2.jpg';
// import axios from 'axios';

// const Body = () => {
//   const [selectedOption, setSelectedOption] = useState('Stretches');
//   const [muscleImage, setMuscleImage] = useState(null);

//   useEffect(() => {
//     if (selectedOption === 'Muscle Strength') {
//       fetchMuscleImage();
//     } else {
//       setMuscleImage(null);
//     }
//   }, [selectedOption]);

//   const toggleOption = () => {
//     setSelectedOption(selectedOption === 'Stretches' ? 'Muscle Strength' : 'Stretches');
//   };

//   const handleChange = (event, newAlignment) => {
//     setSelectedOption(newAlignment);
//   };

//   const fetchMuscleImage = async () => {
//     const options = {
//       method: 'GET',
//       url: 'https://muscle-group-image-generator.p.rapidapi.com/getImage',
//       params: {
//         muscleGroups: 'abs,back,biceps,calfs,chest,core,forearms,gluteus,hamstring,latissimus,quadriceps,shoulders_front,triceps',
//         color: '197,77,77'
//       },
//       headers: {
//         'X-RapidAPI-Key': '9a381fedf9mshb33134968c73c16p1ca6c8jsnf80b3913dbf5',
//         'X-RapidAPI-Host': 'muscle-group-image-generator.p.rapidapi.com'
//       }
//     };
    
//     try {
//       const response = await axios.request(options);
//       setMuscleImage(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h1>Select Your Body Focus</h1>

//       <div className='toggle-container'>
//         <button className='workoutToggle' onClick={toggleOption}>
//           Toggle: {selectedOption}
//         </button>
//       </div>

//       <ToggleButtonGroup
//         color="primary"
//         value={selectedOption}
//         exclusive
//         onChange={handleChange}
//         aria-label="Platform"
//       >
//         <ToggleButton value="Stretches">Stretches</ToggleButton>
//         <ToggleButton value="Muscle Strength">Muscle Strength</ToggleButton>
//       </ToggleButtonGroup>

//       {selectedOption === 'Stretches' ? (
//         <img className='img2' partName={`${selectedOption} - ${selectedOption}`} alt='bodyImage' src={human2} useMap="#image_map" />
//       ) : (
//         muscleImage && <img alt='Muscle Image' src={muscleImage} />
//       )}
//     </div>
//   );
// };

// export default Body;