import React from 'react';
import BodyPart from './BodyPart/BodyPart';

const Body = () => {
  return (
    <div>
      <h1>2D Body</h1>
      <div className="body-container">
        <BodyPart partName="Head" />
        <BodyPart partName="Torso" />
        <BodyPart partName="Legs" />
        <BodyPart partName="Arms" />
      </div>
    </div>
  );
};

export default Body;