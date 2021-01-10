import {
    HANDLE_INPUT, SET_SETTINGS
} from '../constants';


export const handleInputUrl = input => {
    return dispatch => {
        dispatch({ type: HANDLE_INPUT, payload: input });
    }
}

export const handleSelect = ({ value, name }) => {
    return dispatch => {
        dispatch({
            type: SET_SETTINGS,
            payload: { [name]: value }
        })
    }
}

