import React, { Component } from 'react'
import WeeklyForecast from '../components/WeeklyForecast'
import SearchPlace from '../components/SearchPlace'
import WeatherDetail from '../components/WeatherDetail'


class Home extends Component {
    render () {
        return (
            <div className="home">
                <SearchPlace></SearchPlace>       
                <WeeklyForecast></WeeklyForecast>
                <WeatherDetail></WeatherDetail>
            </div>
        )
    }
}

export default Home
