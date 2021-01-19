import * as MediaLibrary from "expo-media-library";
import Downloader from "../../libs/downloader";

import { insertList } from "../../helpers/db";
import Permission from "../../helpers/permissions";

import {
    ADD_TO_HISTORY,
    SET_PROGRESS,
    ADD_ALERT,
    ON_DOWNLOAD
} from "../constants";


/*
 * Download content with ytdl lib
 */

export const handleDownload = () => {
    return async (dispatch, getState) => {

        dispatch({
            type: ON_DOWNLOAD,
            payload: true
        });

        // Redux state
        const state = getState().main;

        // Download lib
        const content = new Downloader({
            url: state.inputUrl,
            settings: state.settings,
        });

        // Initialize and verify input
        try {
            await content.initialize();

        } catch ({ error }) {
            // If initialization error set to err list
            dispatch({ type: ADD_ALERT, payload: error });
            return;
        }

        // Content info
        const info = await content.getContentInfo();

        // Add content info to state history
        dispatch({
            type: ADD_TO_HISTORY,
            payload: info
        });

        // Download content
        let file = await content.downloadAsync((progress) => {
            const { contentId } = info;
            dispatch({
                type: SET_PROGRESS,
                payload: { progress, contentId },
            });
        });

        // Request permission -> ignores if access already granted
        try {
            await Permission.requestPermissions();

        } catch (err) {
            dispatch({
                type: ADD_ALERT,
                payload: {
                    error: "Media Access is required to save content to gallery",
                },
            });
            return;
        }

        // Save image asset to libary
        await MediaLibrary.saveToLibraryAsync(file.uri);

        try {
            // Insert containet to db
            await insertList(info);

        } catch (err) {
            dispatch({
                type: ADD_ALERT,
                payload: {
                    error: "Error occured while saving",
                },
            });
        }
    };
};
