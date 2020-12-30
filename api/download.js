import ytdl from "react-native-ytdl";
import System from '../helpers/system';
import Validation from '../helpers/validation';


class Config {

    static getQuality(settings) {
        console.log('settings', settings.format)
        const config = {
            mp4: {
                high: 'highestvideo',
                low: 'lowestvideo'
            },
            mp3: {
                high: 'highestaudio',
                low: 'lowestaudio'
            }
        }

        let format = config[settings.format];
        let quality = settings.quality.split(' ')[0];

        return format[quality];
    }
}


class Downloader {

    constructor({ url, settings }) {
        this.url = url;
        this.settings = settings;
    }

    setContentName = () => {
        const format = (this.settings.format).toLowerCase();
        this.name = `${this.id}.${format}`;
    }

    setContentId = async () => {
        try {
            // Parse content Id from url
            this.id = await ytdl.getVideoID(this.url);

        } catch (error) { console.log('Video id is not valid') }
    }

    downloadable = async (url, name) => {
        // Path where to save
        const path = System.createPath(name);

        try {
            // Get downloadable url
            console.log('xxxx', Config.getQuality(this.settings))
            const urls = await ytdl(url, {
                quality: Config.getQuality(this.settings)
            })

            // Return path && downloadable url
            return { path, url: urls[0].url };

        } catch (err) {
            console.log('Unable to create downloadable');
        }
    }

    downloadAsync = async callback => {
        // Set Content id ->this.id
        await this.setContentId();

        // Content name with extension
        this.setContentName();

        // Validate url input
        const validation = new Validation(this.url, this.id);
        let isValid = await validation.validate();

        // If Validation failed
        if (!isValid) {
            return callback({ error: 'Url is not valid' });
        }

        // Create Downloadable
        const { url, path } = await this.downloadable(this.url, this.name);
        const dwable = await System.createDownloadable(url, path, callback);

        // Download Content
        let { uri, status } = await dwable.downloadAsync();
        if (status !== 200) { return { error: 'Failed to download' } };

        // Save content to gallery
        await System.saveToGallery(uri);

        // Callabck with success message
        callback({ success: 'Saved' });
    }
}


export default Downloader;
