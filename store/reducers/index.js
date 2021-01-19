import {
<<<<<<< HEAD
    HANDLE_INPUT,
    SET_SETTINGS,
    REMOVE_HISTORY_ITEM,
    ADD_TO_HISTORY,
    SET_PROGRESS,
    SET_HISTORY_LIST,
    ADD_ALERT,
    REMOVE_ALERT,
    ON_DOWNLOAD
} from "../constants";

const initialState = {
    inputUrl: "",
    progress: 0,
    onDownload: false,
    settings: {
        format: "mp4",
        source: "",
    },
    history: {},
    alertMessages: [],
=======
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
    source: "",
  },
  history: {},
  alertMessages: [],
>>>>>>> c02bd16d9b5c47d2afe80519c609d497a5b9541e
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

<<<<<<< HEAD
        case ADD_TO_HISTORY: {
            const { contentId } = action.payload;
            return {
                ...state,
                onDownload: false,
                inputUrl: "",
                settings: {
                    ...state.settings,
                    source: action.payload.source
                },
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
=======
    case SET_HISTORY_LIST: {
      return {
        ...state,
        history: action.payload,
      };
    }
>>>>>>> c02bd16d9b5c47d2afe80519c609d497a5b9541e

    case ADD_TO_HISTORY: {
      const { contentId } = action.payload;
      return {
        ...state,
        inputUrl: "",
        settings: {
          ...state.settings,
          source: action.payload.source,
        },
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

<<<<<<< HEAD
        case ADD_ALERT: {
            let newAlertList = [...state.alertMessages];
            newAlertList.unshift(action.payload.error);

            return {
                ...state,
                alertMessages: newAlertList,
                onDownload: false
            };
        }

        case ON_DOWNLOAD: {
            return {
                ...state,
                onDownload: action.payload
            }
        }

        case REMOVE_ALERT: {
            state.alertMessages.shift();
            return {
                ...state,
                alertMessages: state.alertMessages,
            };
        }
=======
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
>>>>>>> c02bd16d9b5c47d2afe80519c609d497a5b9541e

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
