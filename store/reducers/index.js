import {
    HANDLE_INPUT,
    SET_SETTINGS,
    REMOVE_HISTORY_ITEM
} from '../constants';


const initialState = {
    inputUrl: '',
    settings: {
        format: 'mp4',
        quality: 'high'
    },
    history: [
        {
            "contentId": "gX3dfuNk8xVMc",
            "format": "mp4",
            "id": 8,
            "quality": "high",
            "thumbnail": "https://img.youtube.com/vi/gX3uNk8xVMc/0.jpg",
            "title": "Cute Malamute Husky Puppy Howls Along",
            "url": "https://www.youtube.com/watch?v=gX3uNk8xVMc",
        },
        {
            "contentId": "gX3uNfk8xVMc",
            "format": "mp4",
            "id": 8,
            "quality": "high",
            "thumbnail": "https://img.youtube.com/vi/gX3uNk8xVMc/0.jpg",
            "title": "Cute Malamute Husky Puppy Howls Along",
            "url": "https://www.youtube.com/watch?v=gX3uNk8xVMc",
        }
    ]
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

        case REMOVE_HISTORY_ITEM: {
            return {
                ...state,
                history: state.history.filter(item => {
                    return item.contentId === action.payload.id;
                })
            }
        }


        default:
            return state
    }
}

export default reducer;