import { HANDLE_INPUT } from '../constants';


export const handleDownload = () => {
    return (dispatch, getState) => {
        const state = getState().main;

        // Clear input url
        dispatch({ type: HANDLE_INPUT, payload: '' });
    }
}