import React, { useState } from 'react';
import './Body.css';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import human from '../components/Body.jpg';
import human2 from '../components/Body2.jpg';

const Body = () => {
  const [selectedOption, setSelectedOption] = useState('Stretches');

  const toggleOption = () => {
    setSelectedOption(selectedOption === 'Stretches' ? 'Muscle Strength' : 'Stretches');
  };

  const handleChange = (event, newAlignment) => {
    setSelectedOption(newAlignment);
  };

  return (
    <div>
      <h1>Select Your Body Focus</h1>

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
          value="Stretches"
          style={{
            backgroundColor: selectedOption === 'Stretches' ? '#ff0000' : '#cccccc', 
            color: selectedOption === 'Stretches' ? '#ffffff' : '#000000', 
          }}
        >
          Stretches
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

      {/* this is how the image will be changed depending on the selected Focus */}
      {selectedOption === 'Stretches' ? (
        <img className='img2' partName={`${selectedOption} - ${selectedOption}`} alt='bodyImage' src={human2} useMap="#image_map" />
      ) : (
        <img className='img' partName={`${selectedOption} - ${selectedOption}`} alt='bodyImage' src={human} useMap="#image_map" />
      )}

    </div>
  );
};

export default Body;