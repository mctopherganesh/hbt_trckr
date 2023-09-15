import React, { useState } from 'react';
import HabitRow from './HabitRow';

const HabitTracker = () => {
  const [habits, setHabits] = useState([]);
  const daysInMonth = new Array(31).fill(null).map((_, idx) => idx + 1);

  const addHabit = () => {
    const habitName = prompt('Enter habit name:');
    if (habitName) {
      setHabits([...habits, habitName]);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Habit</th>
            {daysInMonth.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {habits.map((habit, idx) => (
            <HabitRow key={idx} habitName={habit} daysInMonth={daysInMonth} />
          ))}
        </tbody>
      </table>
      <button onClick={addHabit}>Add Habit</button>
    </div>
  );
};

export default HabitTracker;
