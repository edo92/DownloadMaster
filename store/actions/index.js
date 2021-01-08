import {
    HANDLE_INPUT,
    SET_SETTINGS
} from '../constants';


export const handleInputUrl = input => {
    return dispatch => {
        dispatch({ type: HANDLE_INPUT, payload: input });
    }
}

export const handleSelect = (option, name) => {
    return dispatch => {
        dispatch({
            type: SET_SETTINGS,
            payload: { [name]: option.value }
        })
    }
}

export const getHistoryList = () => {
    return dispatch => {
        console.log('get history')
    }
}

export const handleRemoveItem = () => {
    return dispatch => {
        console.log('removeing')
    }
}

export const handleDownload = () => {
    return (dispatch, getState) => {
        const state = getState().main;

        // Clear input url
        dispatch({ type: HANDLE_INPUT, payload: '' });
    }
}

