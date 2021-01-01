import Downloader from '../../api/download';
import helpers from '../../helpers';


export const handleInputUrl = input => {
    return dispatch => {
        dispatch({ type: 'URL_INPUT', payload: input });
    }
}

export const handleSelect = opts => {
    return dispatch => {
        dispatch({ type: 'SET_OPTIONS', payload: opts.value });
    }
}

export const setPermissionStatus = status => {
    return dispatch => {
        dispatch({ type: 'SET_PERMISSION_STATE', payload: status });
    }
}

export const handleSubmit = () => {
    return async (dispatch, getState) => {
        const state = getState().main;

        // Clean up input url
        dispatch({ type: 'URL_INPUT' });

        // Downloadable content
        const content = new Downloader({
            url: state.inputUrl,
            settings: state.selected
        })

        // Validate content (url)
        const isValid = await content.validate();
        if (!isValid) return; // Brake on invalid url


        // Save baseic info of the content to state
        await content.getBasicInfo(info => {
            dispatch({  // Add content info to history
                type: 'ADD_TO_HISTORY',
                payload: { info, content }
            })
        })

        // Donwlaod content
        await content.downloadAsync(progress => {
            if (progress.error) return;

            // Parse progress and set to state
            const parsed = helpers.parseProgress(progress);
            const payload = { progress: parsed, id: content.id };

            if (parsed) {
                dispatch({ type: 'SET_PROGRESS', payload });
            }
        })
    }
}
