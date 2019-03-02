import React from 'react';
import 'react-big-calendar-like-google/lib/css/react-big-calendar.css';
import BigCalendar from 'react-big-calendar-like-google';
import moment from 'moment';



BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const MyCalendar = props => (
    <div>
        <BigCalendar
            events={[]}
            startAccessor='startDate'
            endAccessor='endDate'
        />
    </div>
);

class Calendar extends React.Component{
    render() {
        return(MyCalendar())
    }

}
export default Calendar;