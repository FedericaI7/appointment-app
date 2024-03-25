import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarComponent = () => {
  const [value, onChange] = useState(new Date());

  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const isPastDate = (date) => {
    const today = new Date();
    return date < today;
  };

  const tileClassName = ({ date }) => {
    if (isToday(date)) {
      return "today";
    } else if (isPastDate(date)) {
      return "past";
    } else {
      return "future";
    }
  };

  return (
    <>
      <Calendar
        onChange={onChange}
        value={value}
        // selectRange={true}
        // tileClassName={tileClassName}
        maxDetail="month"
      />
    </>
  );
};

export default CalendarComponent;
