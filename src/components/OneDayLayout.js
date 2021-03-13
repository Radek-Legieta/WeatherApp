import './css/oneDayLayout.css'
import React from 'react';

const OneDayLayout = ({day}) => {
    
    const tempsForAllDay = (day.byHour.map((el) => {
        return (Math.round((el.weatherData.tempMax + el.weatherData.tempMin)/2)) 
    })).sort((a,b) => {return  a-b });

    const tempMax = tempsForAllDay[tempsForAllDay.length-1];
    const tempMin = tempsForAllDay[0];
    
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const weekDay = week[day.day]

    return (
        <div className= 'day-layout'>
            <p>{weekDay}</p>
            <p className='max-temp'>{tempMax}&deg;C</p>
            <p className='min-temp'>{tempMin}&deg;C</p>
        </div>
       
    )
}

export default OneDayLayout