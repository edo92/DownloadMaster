import ytdl from "react-native-ytdl";

class Validation {
    constructor(url) {
        this.url = url;
    }

    async getId() {
        try {
            return await ytdl.getVideoID(this.url);

        } catch (error) { console.log('Video id is not valid') }
    };

    getUrl() {
        return this.url;
    }

    async validateUrl(id) {
        try {
            return await ytdl.validateURL(id);

        } catch (err) { console.log('validation error') }
    }

    async validateId(id) {
        try {
            return await ytdl.validateID(id);

        } catch (err) { console.log('validation error') }
    }

    async validateListAsync(list) {
        return !list.reduce((a, b) => ((a + b) - 1), 0);
    }

    async validate() {
        // if string is empty
        if (!this.url.trim().length) return false;

        return this.validateListAsync([
            await this.validateUrl(this.getUrl()),
            await this.validateId(await this.getId())
        ])
    }
}

export default Validation;