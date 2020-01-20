import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return { isShowDetails: state.isShowDetails,
             requestedIndex: state.requestedIndex,
             weatherDetail: state.weatherDetail
            };
}

const WeatherDetail = ({ isShowDetails, requestedIndex, weatherDetail }) => {
    const getLocalTime = (seconds) => {
        var d = new Date(seconds * 1000);
        return d.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit', 'hour12': true})
    }

    const detail = weatherDetail.daily && weatherDetail.daily.data && isShowDetails ? (
        <div>
            <div className="card-detail"></div>
            <div className="weather-detail-text">
                <div className="summary">
                    {weatherDetail.daily.data[requestedIndex].summary}
                </div>
                <div className="sunrise-sunset">
                    <div className="text">
                        Sunrise :
                        <span className="value-text">
                            &nbsp;{getLocalTime(weatherDetail.daily.data[requestedIndex].sunriseTime)}
                        </span>
                    </div>
                    <div className="text">
                        Sunset :
                        <span className="value-text">
                            &nbsp;{getLocalTime(weatherDetail.daily.data[requestedIndex].sunsetTime)}
                        </span>
                    </div>
                </div>
                <div className="splitter">
                    <div className="text">
                        Cloud Cover :  
                        <span className="value-text">
                            &nbsp;{weatherDetail.daily.data[requestedIndex].cloudCover * 100}%
                        </span>
                        <br></br>
                        <br></br>
                        Humidity : 
                        <span className="value-text">
                            &nbsp;{Math.trunc(weatherDetail.daily.data[requestedIndex].humidity * 100)}%
                        </span>
                        <br></br>
                        <br></br>
                        Dew Point : 
                        <span className="value-text">
                            &nbsp;{Math.trunc(weatherDetail.daily.data[requestedIndex].dewPoint)}
                        </span>
                        <br></br>
                        <br></br>
                        UV Index : 
                        <span className="value-text">
                            &nbsp;{weatherDetail.daily.data[requestedIndex].uvIndex}
                        </span>
                    </div>
                    <div className="text">
                        Precip Probability : 
                        <span className="value-text">
                            &nbsp;{weatherDetail.daily.data[requestedIndex].precipProbability * 100}%
                        </span>
                        <br></br>
                        <br></br>
                        Ozone :  
                        <span className="value-text">
                            &nbsp;{Math.trunc(weatherDetail.daily.data[requestedIndex].ozone)}
                        </span>
                        <br></br>
                        <br></br>
                        Visibility : 
                        <span className="value-text">
                            &nbsp;{Math.trunc(weatherDetail.daily.data[requestedIndex].visibility)} km
                        </span>
                        <br></br>
                        <br></br>
                        Wind Speed : 
                        <span className="value-text">
                            &nbsp;{Math.trunc(weatherDetail.daily.data[requestedIndex].windSpeed)} m/s
                        </span>
                    </div>
                </div>
            </div>
        </div>
    ) : null
    return (
        <div>
            {detail}
        </div>
    )
}

export default connect(mapStateToProps)(WeatherDetail);