import React, { useState } from 'react';
import TimezoneSlider from './components/TimezoneSlider';
import TimezoneList from './components/TimezoneList';
import DatePicker from './components/DatePicker';
import DarkModeToggle from './components/DarkModeToggle';
import './styles/App.css';

const App = () => {
  const [timezones, setTimezones] = useState(['UTC', 'IST']);
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [darkMode, setDarkMode] = useState(false);

  const addTimezone = (timezone) => {
    setTimezones([...timezones, timezone]);
  };

  const removeTimezone = (index) => {
    const newTimezones = [...timezones];
    newTimezones.splice(index, 1);
    setTimezones(newTimezones);
  };

  const reorderTimezones = (startIndex, endIndex) => {
    const newTimezones = Array.from(timezones);
    const [removed] = newTimezones.splice(startIndex, 1);
    newTimezones.splice(endIndex, 0, removed);
    setTimezones(newTimezones);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <DarkModeToggle toggleDarkMode={toggleDarkMode} />
      <DatePicker selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
      <TimezoneSlider timezones={timezones} selectedTime={selectedTime} />
      <TimezoneList 
        timezones={timezones} 
        addTimezone={addTimezone} 
        removeTimezone={removeTimezone} 
        reorderTimezones={reorderTimezones} 
      />
    </div>
  );
};

export default App;
