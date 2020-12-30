import ytdl from "react-native-ytdl";

class Validation {
    constructor(url, id) {
        this.url = url;
        this.id = id;
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
        // Combine url and id output 
        return !list.reduce((a, b) => ((a + b) - 1), 0);
    }

    async validate() {
        // if string is empty
        if (!this.url.trim().length) return false;

        return this.validateListAsync([
            await this.validateUrl(this.url),
            await this.validateId(this.id)
        ])
    }
}

export default Validation;