import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import ytdl from "react-native-ytdl";


class Downloader {

    constructor({ url, options }) {
        this.url = url;
        this.options = options;
    }

    validate = async (callback) => {
        const getUrl = () => { return this.url.split('=')[1] };
        let isUrlValid = await ytdl.validateURL(this.url);
        let isIdValid = await ytdl.validateID(getUrl());
        callback((isUrlValid + isIdValid) - 1);
    }

    donwloadableUrl = async () => {
        const urls = await ytdl(this.url, { quality: 'highestvideo' });
        const path = `${FileSystem.cacheDirectory}imagexxx.mp4`;
        return { url: urls[0].url, path: path };
    }

    createDownloadable = (url, path, callback) => {
        return FileSystem.createDownloadResumable(
            url, path, {}, callback
        );
    }

    saveToGallery = async uri => {
        try {
            await MediaLibrary.createAssetAsync(uri); // Save to gallery

        } catch (err) {
            console.log('Error saveing to gallery');
        }
    }

    requestPermission = async () => {
        try {
            await MediaLibrary.requestPermissionsAsync();  // Permission for andorid
        }
        catch (err) { console.log('permission error') }
    }

    download = async callback => {
        await this.requestPermission();

        this.validate(async res => {
            console.log('response', res)
            if (res) {
                let { url, path } = await this.donwloadableUrl();

                const downloadable = this.createDownloadable(url, path, callback);
                let { uri } = await downloadable.downloadAsync();

                await this.saveToGallery(uri);
            }
            else console.log('Validation error')
        })
    }
}

export default Downloader;