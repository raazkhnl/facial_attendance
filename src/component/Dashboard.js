import React, { useEffect, useState } from 'react'
//Calender/////
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  console.log(date)
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  
  
  return (
    <>
        <div className="dashboard">
  <div className="dashboard-header">
    <h3>Welcome to FAS! <br /> It's <strong>{date.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}</strong></h3>
  
  </div>
  <div className="dashboard-body" style={{margin: 20}}>
  <Calendar
        onChange={setDate}
        value={date}
        firstDayOfWeek={0}
        tileContent={({ date, view }) => {
          if (view === 'month') {
            const day = date.getDate();
            const month = date.getMonth();
            const year = date.getFullYear();
            // const data = require('../resources/hamro_patro/hamro-patro-scrapper/data/years/2080.json');
            // const dayData = data[month-3]?.days?.[day - 17];           
            // const event = dayData?.event;
            // const isHoliday = dayData?.isHoliday;
            // // const dayInEn = dayData?.dayInEn;
            // const dayInNp = dayData?.day;
            // const en = dayData?.en;
            // const className = isHoliday ? 'holiday' : '';
            return (
              <div >
                {/* <div>{dayInEn}</div> */}
                {/* <div>{dayInNp}</div> */}
                {/* <div>{event}</div> */}
              </div>
            );
          }
        }}
      />  </div></div>
</>
  )
}

export default Dashboard