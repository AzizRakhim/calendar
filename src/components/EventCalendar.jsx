import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState, useEffect } from "react";

function EventCalendar() {
  const handleDateClick = (arg) => {
    alert(arg.dateStr);
  };

  function renderEventContent(eventInfo) {
    console.log(eventInfo);
    return (
      <div>
        <i>{eventInfo.event.title}</i>
      </div>
    );
  }

  const handleDateSelect = (selectInfo) => {
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: Date.now(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handleEventClick = (clickInfo) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  };

  const handleEvents = (events) => {
    console.log(events);
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={[
          {
            id: Date.now(),
            title: "event 1",
            date: "2023-01-01",
          },
          { id: Date.now(), title: "event 2", date: "2023-01-01" },
          { id: Date.now(), title: "event 3", date: "2023-01-01" },
        ]}
        weekends={true}
        eventContent={renderEventContent}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        select={handleDateSelect}
        eventClick={handleEventClick}
        eventsSet={handleEvents}
        eventAdd={function () {}}
        eventChange={function () {}}
        eventRemove={function () {}}
      />
    </div>
  );
}

export default EventCalendar;
