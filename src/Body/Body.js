import React from 'react';
import BodyPart from './BodyPart/BodyPart';
import './Body.css';

const Body = () => {

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

      <div className="body-container">
        <BodyPart partName={`${selectedOption} - Head`} />
        <BodyPart partName={`${selectedOption} - Torso`} />
        <BodyPart partName={`${selectedOption} - Legs`} />
        <BodyPart partName={`${selectedOption} = Arms`} />
      </div>
    </div>
  );
};

export default Body;