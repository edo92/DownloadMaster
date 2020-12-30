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
    onProgress: false
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
                progress: action.payload
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

        default:
            return state
    }
}

export default reducer;