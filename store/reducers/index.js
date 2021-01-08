import {
    HANDLE_INPUT,
    SET_SETTINGS
} from '../constants';


const initialState = {
    inputUrl: '',
    settings: {
        format: 'mp4',
        quality: 'high'
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_INPUT: {
            return {
                ...state,
                inputUrl: action.payload
            }
        }

        case SET_SETTINGS: {
            return {
                ...state,
                settings: {
                    ...state.settings,
                    ...action.payload
                }
            }
        }

        default:
            return state
    }
}

export default reducer;