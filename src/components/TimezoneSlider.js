import React, { useState } from 'react';
import moment from 'moment-timezone';
import '../styles/TimezoneSlider.css'; // Ensure this path is correct

const TimezoneSlider = ({ timezones }) => {
  const [selectedTime, setSelectedTime] = useState(new Date());

  const handleTimeChange = (event) => {
    const newTime = moment(selectedTime).hours(event.target.value);
    setSelectedTime(newTime.toDate());
  };

  return (
    <div className="timezone-slider">
      <input
        type="range"
        min="0"
        max="23"
        value={moment(selectedTime).hours()}
        onChange={handleTimeChange}
      />
      {timezones.map((zone) => (
        <div key={zone} className="timezone">
          {moment.tz(selectedTime, zone).format('HH:mm')} {zone}
        </div>
      ))}
    </div>
  );
};

export default TimezoneSlider;
