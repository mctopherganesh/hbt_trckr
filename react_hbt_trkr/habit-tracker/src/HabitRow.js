import React, { useState } from 'react';

const HabitRow = ({ habitName, daysInMonth }) => {
  const [completedDays, setCompletedDays] = useState([]);

  const toggleDay = (day) => {
    setCompletedDays((prevDays) =>
      prevDays.includes(day)
        ? prevDays.filter((d) => d !== day)
        : [...prevDays, day]
    );
  };

  return (
    <tr>
      <td>{habitName}</td>
      {daysInMonth.map((day) => (
        <td
          key={day}
          className={completedDays.includes(day) ? 'completed' : ''}
          onClick={() => toggleDay(day)}
        >
          {completedDays.includes(day) ? '✓' : ''}
        </td>
      ))}
    </tr>
  );
};

export default HabitRow;
