import { HANDLE_INPUT, SET_SETTINGS, REMOVE_ALERT } from "../constants";

export const handleInputUrl = (input) => {
  return (dispatch) => {
    dispatch({ type: HANDLE_INPUT, payload: input });
  };
};

export const handleSelect = ({ value, name }) => {
  return (dispatch) => {
    dispatch({
      type: SET_SETTINGS,
      payload: { [name]: value },
    });
  };
};

export const removeAlert = () => {
  return (dispatch) => {
    dispatch({ type: REMOVE_ALERT });
  };
};
