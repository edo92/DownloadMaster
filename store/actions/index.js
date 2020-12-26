import Downloader from '../../api/download';
import helpers from '../../helpers';


export const handleInputUrl = input => {
    return dispatch => {
        dispatch({ type: 'URL_INPUT', payload: input });
    }
}

export const handleSelect = opts => {
    return dispatch => {
        dispatch({ type: 'SET_OPTIONS', payload: opts });
    }
}

export const handleSubmit = () => {
    return async (dispatch, getState) => {
        const state = getState().main;

        // Status on progress
        dispatch({ type: 'STATUS_ONPROGRESS', payload: true });

        const content = new Downloader({
            url: state.inputUrl,
            selected: state.selected
        })

        await content.download(progress => {
            const parsed = helpers.parseProgress(progress);
            dispatch({ type: 'SET_PROGRESS', payload: parsed });
        })

        dispatch({ type: 'STATUS_ONPROGRESS', payload: false });
    }
}
