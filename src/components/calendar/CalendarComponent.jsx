import React, { useState } from "react";

const CalendarComponent = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(null);

  const handleDateTimeChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const currentDate = new Date();
    //days
    const disabledDays = [0, 6];
    //hours
    const selectedHour = selectedDate.getHours();
    const minHour = 9;
    const maxHour = 20;

    if (
      selectedDate < currentDate ||
      disabledDays.includes(selectedDate.getDay()) ||
      selectedHour < minHour ||
      selectedHour >= maxHour
    ) {
      setSelectedDateTime(null);
    } else {
      setSelectedDateTime(selectedDate);
    }
  };

  const handleLogDateTime = () => {
    console.log("Data e ora selezionate:", selectedDateTime);
  };

  return (
    <div>
      <input
        type="datetime-local"
        min={getCurrentDateTime()}
        onChange={handleDateTimeChange}
      />
      <button onClick={handleLogDateTime} disabled={!selectedDateTime}>
        Book an Appointment
      </button>
    </div>
  );
};

const getCurrentDateTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month =
    now.getMonth() + 1 < 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1;
  const day = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
  const hours = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
  const minutes =
    now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

export default CalendarComponent;
