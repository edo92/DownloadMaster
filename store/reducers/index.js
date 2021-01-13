import {
    HANDLE_INPUT,
    SET_SETTINGS,
    REMOVE_HISTORY_ITEM,
    ADD_TO_HISTORY,
    SET_PROGRESS,
    SET_HISTORY_LIST,
    ADD_ALERT,
    REMOVE_ALERT,
} from "../constants";

const initialState = {
    inputUrl: "",
    progress: 0,
    settings: {
        format: "mp4",
        source: "youtube",
    },
    history: {},
    alertMessages: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_INPUT: {
            return {
                ...state,
                inputUrl: action.payload,
            };
        }

        case SET_SETTINGS: {
            return {
                ...state,
                settings: {
                    ...state.settings,
                    ...action.payload,
                },
            };
        }

        case SET_HISTORY_LIST: {
            return {
                ...state,
                history: action.payload,
            };
        }

        case ADD_TO_HISTORY: {
            const { contentId } = action.payload;
            return {
                ...state,
                inputUrl: "",
                history: {
                    ...state.history,
                    [contentId]: {
                        ...state.history[contentId],
                        ...action.payload,
                        progress: 1,
                    },
                },
            };
        }

        case REMOVE_HISTORY_ITEM: {
            let newObj = Object.assign({}, state.history);
            delete newObj[action.payload.contentId];

            return {
                ...state,
                history: newObj,
            };
        }

        case SET_PROGRESS: {
            let { downloaded } = action.payload.progress;
            let progress = downloaded === 101 ? 0 : downloaded;

            return {
                ...state,
                history: {
                    ...state.history,
                    [action.payload.contentId]: {
                        ...state.history[action.payload.contentId],
                        progress: progress,
                    },
                },
            };
        }

        case ADD_ALERT: {
            let newAlertList = [...state.alertMessages];
            newAlertList.unshift(action.payload);

            return {
                ...state,
                alertMessages: newAlertList,
            };
        }

        case REMOVE_ALERT: {
            state.alertMessages.shift();
            return {
                ...state,
                alertMessages: state.alertMessages,
            };
        }

        default:
            return state;
    }
};

export default reducer;
