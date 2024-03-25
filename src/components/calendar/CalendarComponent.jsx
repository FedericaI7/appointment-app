import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isSelectingTime, setIsSelectingTime] = useState(false);

  const handleDateClick = (info) => {
    const clickedDate = info.date;
    setSelectedDate(clickedDate);
    setIsSelectingTime(true);
  };

  const handleSlotClick = (info) => {
    const clickedTime = info.date;
    // Do something with the selected date and time
    console.log("Data e ora selezionate:", selectedDate, clickedTime);
    // Resetta lo stato per consentire una nuova selezione
    setSelectedDate(null);
    setIsSelectingTime(false);
  };

  const handleBackButtonClick = () => {
    setIsSelectingTime(false);
  };

  const boh = isSelectingTime ? "timeGridDay" : "dayGridMonth";

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={boh}
        headerToolbar={{
          start: "title",
          center: "",
          end: "today prev,next",
        }}
        height={"600px"}
        events={[]}
        nowIndicator={true}
        editable={true}
        droppable={true}
        selectable={true}
        selectMirror={true}
        dateClick={handleDateClick}
        select={isSelectingTime ? handleSlotClick : undefined}
      />
      {isSelectingTime && (
        <button onClick={handleBackButtonClick}>Torna al giorno</button>
      )}
    </div>
  );
};

export default CalendarComponent;
