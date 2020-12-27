import ytdl from "react-native-ytdl";

class Validation {
    constructor(url) {
        this.url = url;
    }

    parseId = () => {
        return this.url.split('=')[1]
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
            await this.validateId(this.parseId())
        ])
    }
}

export default Validation;