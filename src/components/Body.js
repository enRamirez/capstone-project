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