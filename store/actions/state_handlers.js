import {
    HANDLE_INPUT, SET_SETTINGS, REMOVE_HISTORY_ITEM
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

export const handleRemoveItem = contentId => {
    return dispatch => {
        dispatch({
            type: REMOVE_HISTORY_ITEM,
            payload: { contentId }
        })
    }
}
