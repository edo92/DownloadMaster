import ytdl from "react-native-ytdl";
import System from '../helpers/system';
import Validation from '../helpers/validation';
import Permission from '../helpers/permissions';


class Downloader {

    constructor({ url, options }) {
        this.url = url;
        this.options = options;
    }

    async downloadable(url, name) {
        // Path where to save
        const path = System.createPath(name);

        // Get downloadable url
        const urls = await ytdl(url, {
            quality: 'highestvideo'
        });

        // Return path && downloadable url
        return { path, url: urls[0].url }
    }

    async downloadAsync(callback) {
        // Request permission
        await Permission.requestPermissions();

        // url input validate/sanitize
        const validation = new Validation(this.url);
        let isValid = await validation.validate();

        // If url is not valid brak program with callback err mess
        if (!isValid) {
            return callback({ error: 'Url is not valid ' });
        }

        // Create downloadble get back path and downloadable url
        const name = `${this.url.split('=')[1]}.mp4`;
        const { url, path } = await this.downloadable(this.url, name);
        const dwable = await System.createDownloadable(url, path, callback);

        // Donwload content && save
        let { uri, status } = await dwable.downloadAsync();

        if (status !== 200) { return { error: 'Failed to download' } };

        await System.saveToGallery(uri);

        callback({ success: 'Saved' });
    }
}


export default Downloader;