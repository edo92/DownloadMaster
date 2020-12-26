import Downloader from '../../api/download';

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

        const getProgress = ({ totalBytesExpectedToWrite, totalBytesWritten }) => {
            return {
                total: totalBytesExpectedToWrite,
                current: totalBytesWritten,
                downloaded: (totalBytesWritten / totalBytesExpectedToWrite) * 100 //Convert to percentage
            }
        }

        await content.download(progress => {
            dispatch({ type: 'SET_PROGRESS', payload: getProgress(progress) });
        })

        dispatch({ type: 'STATUS_ONPROGRESS', payload: false });
    }
}
