import ytdl from "react-native-ytdl";
import System from '../helpers/system';
import Validation from '../helpers/validation';


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
        await System.requestPermission();

        // url input validate/sanitize
        const validation = new Validation(this.url);
        let isValid = await validation.validate();

        //
        if (!isValid) {
            return callback({ error: 'Url is not valid ' });
        }

        // Create downloadble get back path and downloadable url
        const { url, path } = await this.downloadable(this.url, 'xxxxx.mp4');
        const dwable = await System.createDownloadable(url, path, callback);

        // Donwload content && save
        let { uri } = await dwable.downloadAsync();
        await System.saveToGallery(uri);

        callback({ success: 'Saved' });
    }
}


export default Downloader;