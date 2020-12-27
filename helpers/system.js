
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';

class System {
    static createPath(name) {
        return `${FileSystem.documentDirectory}${name}`;
    }

    static async createDownloadable(url, path, callback) {
        return await FileSystem.createDownloadResumable(
            url, path, {}, callback
        );
    }

    static async saveToGallery(uri) {
        try {
            await MediaLibrary.createAssetAsync(uri); // Save to gallery

        } catch (err) {
            console.log('Error saveing to gallery');
        }
    }
}

export default System;