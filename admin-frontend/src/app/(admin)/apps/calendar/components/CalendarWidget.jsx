import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import { defaultEvents } from '../data';
const CalendarWidget = () => {
  return <FullCalendar initialView="dayGridMonth" plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin]} themeSystem="bootstrap" bootstrapFontAwesome={false} handleWindowResize={true} slotDuration="00:15:00" slotMinTime="08:00:00" slotMaxTime="19:00:00" buttonText={{
    today: 'Today',
    month: 'Month',
    week: 'Week',
    day: 'Day',
    list: 'List',
    prev: 'Prev',
    next: 'Next'
  }} headerToolbar={{
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay'
  }} events={defaultEvents} dayMaxEventRows={1} editable={true} selectable={true} droppable={true} />;
};
export default CalendarWidget;