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

        // Downloadable content
        const content = new Downloader({
            url: state.inputUrl,
            settings: state.selected
        })

        // Donwlaod content
        await content.downloadAsync(progress => {
            if (progress.error) {
                return { error: progress.error }
            }

            // Parse progress and set to state
            const parsed = helpers.parseProgress(progress);
            dispatch({ type: 'SET_PROGRESS', payload: parsed });
        })

        // Set on progress false (at the end)
        dispatch({ type: 'STATUS_ONPROGRESS', payload: false });
    }
}
