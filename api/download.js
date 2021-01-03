import ytdl from "react-native-ytdl";
import System from '../helpers/system';
import Validation from '../helpers/validation';
import axios from 'axios';

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
        this.url = url.trim();
        this.settings = settings;
    }

    initialize = async () => {
        await this.setContentId(); // Set Content id ->this.id
        await this.setContentName(); // Content name with ext
        await this.setContentTitle(); // Content title
    }

    setContentName = () => {
        const format = (this.settings.format).toLowerCase();
        this.filename = `${this.id}.${format}`;
    }

    setContentId = async () => {
        try {
            // Parse content Id from url
            this.id = await ytdl.getVideoID(this.url);

        } catch (error) { console.log('Video id is not valid') }
    }

    setContentTitle = async () => {
        const content = await axios.get(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${this.id}`);
        this.title = content.data.title;
    }

    downloadable = async (url, name) => {
        // Path where to save
        this.path = System.createPath(name);

        try {
            // Get downloadable url
            const urls = await ytdl(url, {
                quality: Config.getQuality(this.settings)
            })

            // Return path && downloadable url
            return { path: this.path, url: urls[0].url };

        } catch (err) {
            console.log('Unable to create downloadable');
        }
    }

    getBasicInfo = async () => {
        const thumbnail = `https://img.youtube.com/vi/${this.id}/0.jpg`;
        return { thumbnail, title: this.title, id: this.id, url: this.url, ...this.settings };
    }

    validate = async () => {
        await this.initialize();

        // Validate url input
        const validation = new Validation(this.url, this.id);
        return await validation.validate();
    }

    downloadAsync = async callback => {
        // Create Downloadable
        const { url, path } = await this.downloadable(this.url, this.filename);
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
