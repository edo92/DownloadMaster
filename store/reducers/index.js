import {
    HANDLE_INPUT,
    SET_SETTINGS,
    REMOVE_HISTORY_ITEM,
    ADD_TO_HISTORY,
    SET_PROGRESS
} from '../constants';


const initialState = {
    inputUrl: '',
    progress: 0,
    settings: {
        format: 'mp4',
        quality: 'high'
    },
    history: {
        gX3dfuNk8xVMc: {
            "contentId": "gX3dfuNk8xVMc",
            "format": "mp4",
            "id": 8,
            "quality": "high",
            "thumbnail": "https://img.youtube.com/vi/gX3uNk8xVMc/0.jpg",
            "title": "Cute Malamute Husky Puppy Howls Along",
            "url": "https://www.youtube.com/watch?v=gX3uNk8xVMc",
        },
        gX3uNfk8xVMc: {
            "contentId": "gX3uNfk8xVMc",
            "format": "mp4",
            "id": 8,
            "quality": "high",
            "thumbnail": "https://img.youtube.com/vi/gX3uNk8xVMc/0.jpg",
            "title": "Cute Malamute Husky Puppy Howls Along",
            "url": "https://www.youtube.com/watch?v=gX3uNk8xVMc",
        },
        gX3dfauNk8xVMc: {
            "contentId": "gX3dfuNk8xVMc",
            "format": "mp4",
            "id": 8,
            "quality": "high",
            "thumbnail": "https://img.youtube.com/vi/gX3uNk8xVMc/0.jpg",
            "title": "Cute Malamute Husky Puppy Howls Along",
            "url": "https://www.youtube.com/watch?v=gX3uNk8xVMc",
        },
        gX3usNfk8xVMc: {
            "contentId": "gX3uNfk8xVMc",
            "format": "mp4",
            "id": 8,
            "quality": "high",
            "thumbnail": "https://img.youtube.com/vi/gX3uNk8xVMc/0.jpg",
            "title": "Cute Malamute Husky Puppy Howls Along",
            "url": "https://www.youtube.com/watch?v=gX3uNk8xVMc",
        },
        gX3dfauN3k8xVMc: {
            "contentId": "gX3dfuNk8xVMc",
            "format": "mp4",
            "id": 8,
            "quality": "high",
            "thumbnail": "https://img.youtube.com/vi/gX3uNk8xVMc/0.jpg",
            "title": "Cute Malamute Husky Puppy Howls Along",
            "url": "https://www.youtube.com/watch?v=gX3uNk8xVMc",
        },
        gX3usNfk83xVMc: {
            "contentId": "gX3uNfk8xVMc",
            "format": "mp4",
            "id": 8,
            "quality": "high",
            "thumbnail": "https://img.youtube.com/vi/gX3uNk8xVMc/0.jpg",
            "title": "Cute Malamute Husky Puppy Howls Along",
            "url": "https://www.youtube.com/watch?v=gX3uNk8xVMc",
        },
        gX3dfau3N3k8xVMc: {
            "contentId": "gX3dfuNk8xVMc",
            "format": "mp4",
            "id": 8,
            "quality": "high",
            "thumbnail": "https://img.youtube.com/vi/gX3uNk8xVMc/0.jpg",
            "title": "Cute Malamute Husky Puppy Howls Along",
            "url": "https://www.youtube.com/watch?v=gX3uNk8xVMc",
        },
        gX3u2sNfk83xVMc: {
            "contentId": "gX3uNfk8xVMc",
            "format": "mp4",
            "id": 8,
            "quality": "high",
            "thumbnail": "https://img.youtube.com/vi/gX3uNk8xVMc/0.jpg",
            "title": "Cute Malamute Husky Puppy Howls Along",
            "url": "https://www.youtube.com/watch?v=gX3uNk8xVMc",
        }
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


        case 'ADD_TO_HISTORY': {
            const { contentId } = action.payload;
            return {
                ...state,
                inputUrl: '',
                history: {
                    ...state.history,
                    [contentId]: {
                        ...state.history[contentId],
                        ...action.payload,
                        progress: 0
                    }
                }
            }
        }

        case REMOVE_HISTORY_ITEM: {
            let newObj = Object.assign({}, state.history);
            delete newObj[action.payload.contentId];

            return {
                ...state,
                history: newObj
            }
        }

        case SET_PROGRESS: {
            let { downloaded } = action.payload.progress;
            let progress = (downloaded === 101) ? 0 : downloaded;

            return {
                ...state,
                history: {
                    ...state.history,
                    [action.payload.contentId]: {
                        ...state.history[action.payload.contentId],
                        progress: progress
                    }
                }
            }
        }

        default:
            return state
    }
}

export default reducer;