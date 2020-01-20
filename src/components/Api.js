import { Component } from 'react'
import { connect } from 'react-redux'
import { fetchWeather } from '../actions/action'

function mapDispatchToProps (dispatch) {
    return {
        fetchWeather: weather => dispatch(fetchWeather(weather))
    };
}

class Api extends Component {
    state = {}
    componentDidMount() {
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'https://api.darksky.net/forecast/407add53e9e0a890c09d7b5e254482c7/33.72148,73.04329?units=si'
        fetch(proxyUrl + targetUrl)
        .then(blob => blob.json())
        .then(data => {
            this.setState({
                weatherDetail: data
            })
            const { weatherDetail} = this.state;
            this.props.fetchWeather({ weatherDetail });
            console.log(this.state.weatherDetail)
            this.setState({ weatherDetail: "" });
            
        })
        .catch(e => {
            console.log(e);
            return e;
        });
    }
    render () {
        return (null)
    }
}

export default connect( null, mapDispatchToProps) (Api)