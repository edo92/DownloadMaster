import ytdl from "react-native-ytdl";
import System from '../helpers/system';
import Validation from '../helpers/validation';
import Permission from '../helpers/permissions';


class Config {

    static getQuality(settings) {
        if (settings.format === 'MP4') {
            if (settings.quality === 'Highest Quality') {
                return 'highestvideo'
            } else {
                return 'lowestvideo'
            }
        }
        else if (settings.format === 'MP3') {
            if (settings.quality === 'Highest Quality') {
                return 'highestaudio'
            }
            else {
                return 'lowestaudio'
            }
        }
    }
}

class Downloader {

    constructor({ url, settings }) {
        this.url = url;
        this.settings = settings;
    }


    async downloadable(url, name) {
        // Path where to save
        const path = System.createPath(name);
        console.log('testing......', Config.getQuality(this.settings))
        // Get downloadable url
        const urls = await ytdl(url, {
            quality: Config.getQuality(this.settings)
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
        let contentId = validation.getId();

        // If url is not valid brak program with callback err mess
        if (!isValid) {
            console.log('tesitng', isValid)
            return callback({ error: 'Url is not valid ' });
        }

        // Create downloadble get back path and downloadable url
        const format = (this.settings.format).toLowerCase();
        console.log('format', format)
        const name = `${contentId}.${format}`;

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