import React, { Component } from 'react'
import { days } from '../Utils/utils'
import { connect } from 'react-redux'
import { addShowDetailsFlag, addRequestedIndex } from '../actions/action'

const mapStateToProps = state => {
    return { weatherDetail: state.weatherDetail };
}
const mapDispatchToProps = dispatch => {
    return {
        addShowDetailsFlag: showDetailsFlag => dispatch(addShowDetailsFlag(showDetailsFlag)),
        addRequestedIndex: requestedIndex => dispatch(addRequestedIndex(requestedIndex)),
    };
}

class WeeklyForecast extends Component {
    render () {
        let { weatherDetail } = this.props;
        const getDay = (seconds) => {
            var d = new Date(seconds * 1000);
            return d.getDay();
        }
        const handleDetailSection = (id) => {
            this.props.addShowDetailsFlag(true);
            this.props.addRequestedIndex(id);
        }
        const handleFocusOut = () => {
            this.props.addShowDetailsFlag(false);
            this.props.addRequestedIndex(null);
        }
        const weather = (weatherDetail && weatherDetail.daily && weatherDetail.daily.data) ? (
            weatherDetail.daily.data.map ((data, index) => {
                    return (
                        <div className="weather-cards" key={index} tabIndex="-1" onBlur={handleFocusOut}  onClick={() => handleDetailSection(index)}>
                            <div style={{fontWeight: '700', color: 'magenta'}}>{days[getDay(data.sunriseTime)]}</div>
                            <img src={require(`../images/${data.icon}.svg`)} alt="cloudy" height="87px" width="100px" />
                            <div className="text">{Math.trunc(data.temperatureMin)}    {Math.trunc(data.temperatureMax)}</div>
                        </div>
                    )
                }
            )
        ) : (
            <div className="center">Loading Data</div>
        )
        return (
            <div className="container">
                {weather}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeeklyForecast);