import './css/App.css'
import React from 'react';
import Weather from '../api/Weather';
import SearchBar from './SearchBar';
import OptionsMenu from './OptionsMenu';
import DailyLayout from './DailyLayout';
import DataForNowLayout from './DataForNowLayout';


class App extends React.Component {
    state = {
        listOfDays: [], 
        weatherNow: [], 
        city: '', 
    
        units:'Metric',
        language:'English',
        style:'Day'
    }

    componentDidMount() {
        this.onSubmit('Warszawa')
    }
   
    onSubmit = async (term) => {
        console.log('blablabla')
        const responseForecast = await Weather.get('/forecast', {
            params: {
                q: term,
                units: this.state.units,
            }
            
        });

        const responseWeather = await Weather.get('/weather', {
            params: {
                q: term,
                units: this.state.units,
            }
        });
        
        this.setState({
            listOfDays: responseForecast.data.list,
            weatherNow: responseWeather.data,
            city: responseForecast.data.city.name
        })
        console.log(this.state)
    }
    onClick = (term, itemElement) => {
        console.log(term, itemElement)
        console.log(this)
        
            if (itemElement === 'units') {this.setState({units: term})}
            if (itemElement === 'lang') {this.setState({language: term})}
            if (itemElement === 'style') {this.setState({style: term})}
        
        
        console.log(this.state.units)
        this.onSubmit(this.state.city)
    }
    
    
    render() {
        
        return (
            <div>
                <div>
                <OptionsMenu onClick = {this.onClick}/>
                <div className = 'search-bar'>
                    <h2>{this.state.city}</h2>
                    <SearchBar onSubmit = {this.onSubmit}/>
                </div>
                
                </div>
                
                <DataForNowLayout weatherNow = {this.state.weatherNow} />
                <DailyLayout listOfDays = {this.state.listOfDays}/>
            </div>
            
        )
    }
}

export default App;



