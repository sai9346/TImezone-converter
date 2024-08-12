import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/DatePicker.css';

const DatePickerComponent = ({ selectedTime, setSelectedTime }) => {
  return (
    <div className="date-picker">
      <DatePicker
        selected={selectedTime}
        onChange={(date) => setSelectedTime(date)}
        showTimeSelect
        dateFormat="Pp"
      />
    </div>
  );
};

export default DatePickerComponent;
