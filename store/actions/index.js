import Downloader from '../../api/download';
import helpers from '../../helpers';
import { dropDatabase, fetchList, insertList } from '../../helpers/db';

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

export const getSavedList = () => {
    return async dispatch => {
        // Conver arr to obj -> id:data
        const convObj = arr => {
            let list = {};
            arr.map((item, i) => {
                list[item.content] = arr[i];
            })
            return list;
        }

        // Fetch all db data(list)
        const savedList = await fetchList();
        const list = convObj(savedList.rows._array);

        dispatch({ type: 'SET_HISTORY_LIST', payload: list });
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
        const info = await content.getBasicInfo();
        console.log('info---', info)
        dispatch({ type: 'ADD_TO_HISTORY', payload: info });

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

        await insertList(info); // Save to db after downloaded
    }
}
