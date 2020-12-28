import ytdl from "react-native-ytdl";
import System from '../helpers/system';
import Validation from '../helpers/validation';
import Permission from '../helpers/permissions';




class Config {
    static getQuality(settings) {
        const test = {
            mp4: {
                Highest: 'highestvideo',
                Lowest: 'lowestvideo'
            },
            mp3: {
                Highest: 'highestaudio',
                Lowest: 'lowestaudio'
            }
        }

        let format = test[settings.format.toLowerCase()];
        let quality = settings.quality.split(' ')[0];

        return format[quality];
    }
}

class Downloader {
    constructor({ url, settings }) {
        this.url = url;
        this.settings = settings;
    }

    getId = async () => {
        try {
            return await ytdl.getVideoID(this.url);

        } catch (error) { console.log('Video id is not valid') }
    }

    downloadable = async (url, name) => {
        // Path where to save
        const path = System.createPath(name);

        // Get downloadable url
        const urls = await ytdl(url, {
            quality: Config.getQuality(this.settings)
        });

        // Return path && downloadable url
        return { path, url: urls[0].url }
    }

    downloadAsync = async callback => {
        // Request permission
        await Permission.requestPermissions();

        const validation = new Validation(this.url, await this.getId());
        let isValid = await validation.validate();

        if (!isValid) { // If Validation failed
            return callback({ error: 'Url is not valid ' });
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
