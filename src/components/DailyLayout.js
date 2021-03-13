import './css/dailyLayout.css'
import React from 'react';
import OneDayLayout from './OneDayLayout'


const DailyLayout = ({listOfDays}) => {

    let byHour = []
    const days = listOfDays.map( (el) => {

        const date = new Date(el.dt*1000 - 3600000);

        return {
            day: date.getDay(),
            hour: date.getHours(),
            weatherData: {
                tempMin: el.main.temp_min,
                tempMax: el.main.temp_max,
                pressure: el.main.pressure,
                tempFeels: el.main.feels_like,
                weatherIcon: el.weather[0].icon
            }
        };
    });
    
    const arrayRefactor = (array) => {
        let dataByHour = []
        const dataByDay = []
    
            for (let i = 0; i<array.length; i++) {
            
                dataByHour.push({ 
                    hour: array[i].hour,
                    weatherData: array[i].weatherData
            })
               const day = array[i].day
    
                if (array.length === i+1 ) {

                    dataByDay.push({
                        day: day,
                        byHour: dataByHour
                    })
                    dataByHour = []

                    break
                }
                if (array[i].day !== array[i+1].day) {
                    
                    dataByDay.push({
                        day: day,
                        byHour: dataByHour
                    })
                    dataByHour = []

                    continue
                }
            }
            
            return dataByDay
    }

    if (days.length !== 0) {
       byHour = arrayRefactor(days)     
    }
    const renderedDays = byHour.map((oneDay) => {
        return <OneDayLayout day={oneDay} key={oneDay.day}/>
    })

    return (
    <div className = 'all-days-layout'>{renderedDays}</div>
    )
}

export default DailyLayout