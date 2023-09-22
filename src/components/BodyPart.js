import React from 'react';
import './BodyPart.css';

const BodyPart = ({ partName }) => {
  return <div className="body-part">{partName}</div>;
};

export default BodyPart;