import * as MediaLibrary from 'expo-media-library';
import Downloader from '../../libs/downloader';

import { ADD_TO_HISTORY, SET_PROGRESS, ADD_ALERT } from '../constants';
import { insertList } from '../../helpers/db';


export const handleDownload = () => {
    return async (dispatch, getState) => {
        // Redux state
        const state = getState().main;

        const content = new Downloader({
            url: state.inputUrl,
            settings: state.settings
        })

        // Initialize and verify input
        try { await content.initialize() }
        // If initialization error set to err list
        catch ({ error }) {
            dispatch({ type: ADD_ALERT, payload: error });
            return;
        }

        // Content information
        const info = await content.getContentInfo();

        // Add content info to state history
        dispatch({ type: ADD_TO_HISTORY, payload: info });

        // Download content
        let file = await content.downloadAsync(progress => {
            const { contentId } = info;
            dispatch({
                type: SET_PROGRESS,
                payload: { progress, contentId }
            })
        })

        await MediaLibrary.createAssetAsync(file.uri);
        await insertList(info); // Save to db after downloaded
    }
}