import { System } from '../../helpers';
import { dropDatabase, fetchList, insertList } from '../../helpers/db';
import Downloader from '../../libs/downloader';
import * as MediaLibrary from 'expo-media-library';


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

        // Initialize ytl donwlaoder
        const content = new Downloader({
            url: state.inputUrl,
            settings: state.selected
        })

        // Content information
        const info = await content.getContentInfo();

        // Add content info to state history
        dispatch({ type: 'ADD_TO_HISTORY', payload: info });

        // Download content
        let file = await content.downloadAsync(progress => {
            dispatch({
                type: 'SET_PROGRESS',
                payload: { progress, id: info.id }
            })
        })

        await MediaLibrary.createAssetAsync(file.uri);
        await insertList(info); // Save to db after downloaded
    }
}
