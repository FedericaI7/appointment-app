import React, { useState } from "react";
import styles from "@/styles/Doctor.module.scss";

const CalendarComponent = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [isBooked, setIsBooked] = useState(false);

  const handleDateTimeChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const currentDate = new Date();
    // Giorni
    const disabledDays = [0, 6];
    // Ore
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
    setIsBooked(true);
  };

  return (
    <div className={styles.CalendarComponent}>
      {!isBooked && (
        <input
          className={styles.inputCalendar}
          type="datetime-local"
          min={getCurrentDateTime()}
          onChange={handleDateTimeChange}
        />
      )}
      {!isBooked && (
        <button
          className={styles.btnCalendar}
          onClick={handleLogDateTime}
          disabled={!selectedDateTime}
        >
          Prenota un Appuntamento
        </button>
      )}
      {isBooked && (
        <p>
          Thank you for booking your visit. We have sent you a confirmation
          email.
        </p>
      )}
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
