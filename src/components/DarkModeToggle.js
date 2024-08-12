import React from 'react';
import '../styles/DarkModeToggle.css';

const DarkModeToggle = ({ toggleDarkMode }) => {
  return (
    <div className="dark-mode-toggle">
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  );
};

export default DarkModeToggle;
