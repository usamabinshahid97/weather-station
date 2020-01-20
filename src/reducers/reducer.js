import { FETCH_WEATHER_DATA, ADD_SHOW_DETAILS_FLAG, ADD_REQUESTED_INDEX } from '../constants/action-types'

const initialState = {
    weatherDetail: [],
    isShowDetails: false,
    requestedIndex: null
};

function rootReducer (state = initialState, action) {
    if (action.type === FETCH_WEATHER_DATA) {
        state = {
            ...state, 
            weatherDetail: action.payload.weatherDetail
        }
        // console.log(state)
    } else if (action.type === ADD_SHOW_DETAILS_FLAG) {
        state = {
            ...state, 
            isShowDetails: action.payload
        }
        // console.log(state)
    } else if (action.type === ADD_REQUESTED_INDEX) {
        state = {
            ...state, 
            requestedIndex: action.payload
        }
        // console.log(state)
    }
    return state;
}

export default rootReducer