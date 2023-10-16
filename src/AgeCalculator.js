// src/AgeCalculator.js

import React, { useState } from 'react';

function AgeCalculator() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const birthDate = new Date(dob);
    const today = new Date();
    const ageInMilliseconds = today - birthDate;
    const ageInYears = Math.floor(ageInMilliseconds / 31557600000); // 1 year in milliseconds
    setAge(ageInYears);
  };

  return (
    <div>
      <h2>Age Calculator</h2>
      <label>Enter your Date of Birth: </label>
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
      <button onClick={calculateAge}>Calculate Age</button>
      {age && <p>Your age is: {age} years</p>}
    </div>
  );
}

export default AgeCalculator;
