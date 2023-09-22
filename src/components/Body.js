import React, { useState } from 'react';
import './Body.css';
import BodyPart from './BodyPart'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const Body = () => {

  const [alignment, setAlignment] = React.useState('stretches');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const [selectedOption, setSelectedOption] = useState('Stretches');

  const toggleOption = () => {
    setSelectedOption(selectedOption === 'Stretches' ? 'Muscle Strength' : 'Stretches');
  }

  return (
    <div>
      <h1>Select Your Body Focus</h1>

      <div className='toggle-container'>
        <button className='workoutToggle' onClick={toggleOption}>
          Toggle: {selectedOption}
        </button>
      </div>

      <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="stretches">Stretches</ToggleButton>
      <ToggleButton value="muscleStrength">Muscle Strength</ToggleButton>
    </ToggleButtonGroup>

      {/* <div className="body-container">
        <BodyPart partName={`${selectedOption} - Head`} />
        <BodyPart partName={`${selectedOption} - Torso`} />
        <BodyPart partName={`${selectedOption} - Legs`} />
        <BodyPart partName={`${selectedOption} = Arms`} />
      </div> */}
    </div>
  );
};

export default Body;