const initialState = {
    inputUrl: '',
    selected: {
        format: 'mp4',
        quality: 'high'
    },
    progress: {
        total: 0,
        current: 0,
        downloaded: 0
    },
    onProgress: false,
    history: {
        // xxzzyy: {
        //     content: {
        //         settings: {
        //             "format": "mp4",
        //             "quality": "high",
        //         },
        //     },
        //     info: {
        //         thumbnail: 'https://img.youtube.com/vi/nQbMlMLqwz8/0.jpg'
        //     }
        // }
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'URL_INPUT': {
            return {
                ...state,
                inputUrl: action.payload || ''
            }
        }

        case 'SET_OPTIONS': {
            return {
                ...state,
                selected: {
                    ...state.selected,
                    ...action.payload
                }
            }
        }

        case 'SET_PROGRESS': {
            return {
                ...state,
                history: {
                    ...state.history,
                    [action.payload.id]: {
                        ...state.history[action.payload.id],
                        progress: action.payload.progress
                    }
                }
            }
        }

        case 'STATUS_ONPROGRESS': {
            return {
                ...state,
                onProgress: action.payload
            }
        }

        case 'SET_PERMISSION_STATE': {
            return {
                ...state,
                permissions: action.payload
            }
        }

        case 'ADD_TO_HISTORY': {
            const { id } = action.payload.content;
            return {
                ...state,
                history: {
                    ...state.history,
                    [id]: { ...action.payload, progress: { downloaded: 0 } }
                }
            }
        }

        default:
            return state
    }
}

export default reducer;