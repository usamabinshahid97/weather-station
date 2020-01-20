import React, { Component } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

class SearchPlace extends Component {
    render() {
        return (
            <div className="search-bar">
                <GooglePlacesAutocomplete inputClassName="input" placeholder="Enter Location...">
                    autocompletionRequest={{ types: ['(cities)'] }} onSelect={console.log}
                </GooglePlacesAutocomplete>
                <button className="button button5">Search</button>
            </div>
            // {/* <div className="search-bar">
            //     <Script url="https://maps.googleapis.com/maps/api/js?key=AIzaSyABGlLCnf2YDyh7ZjYacqF6LaGSgjrlpfo&libraries=places" onLoad={this.handleScriptLoad}/>
            //     <input type="text" placeholder="Enter Location..."></input>
            //     <button className="button button5">Search</button>
            // </div> */}
        )
    }
}

export default SearchPlace