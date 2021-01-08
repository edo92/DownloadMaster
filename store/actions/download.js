import { ADD_TO_HISTORY } from '../constants';
import Downloader from '../../libs/downloader';


export const handleDownload = () => {
    return async (dispatch, getState) => {
        const state = getState().main;

        const content = new Downloader({
            url: state.inputUrl,
            settings: state.settings
        })

        // Content information
        const info = await content.getContentInfo();
        // Add content info to state history
        dispatch({ type: ADD_TO_HISTORY, payload: info });


        // Download content
        let file = await content.downloadAsync(progress => {
            const { contentId } = info;
            dispatch({
                type: 'SET_PROGRESS',
                payload: { progress, contentId }
            })
        })

        // await MediaLibrary.createAssetAsync(file.uri);
        // await insertList(info); // Save to db after downloaded
    }
}