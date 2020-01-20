import { FETCH_WEATHER_DATA, ADD_SHOW_DETAILS_FLAG, ADD_REQUESTED_INDEX } from '../constants/action-types'

export function fetchWeather (payload) {
    return { type: FETCH_WEATHER_DATA, payload };
};

export function addShowDetailsFlag (payload) {
    return { type: ADD_SHOW_DETAILS_FLAG, payload };
};

export function addRequestedIndex (payload) {
    return { type: ADD_REQUESTED_INDEX, payload };
};