"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_native_ytdl_1 = tslib_1.__importDefault(require("react-native-ytdl"));
const axios_1 = tslib_1.__importDefault(require("axios"));
const helpers_1 = require("./helpers");
class GetherData {
    setContentTitle() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const endpoint = helpers_1.System.ytlInfoEndpoint(this.id);
                this.title = yield (yield axios_1.default.get(endpoint)).data.title;
            }
            catch (err) {
                console.log('unable to get video info');
            }
        });
    }
    setContentId() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                this.id = yield react_native_ytdl_1.default.getVideoID(this.url);
            }
            catch (error) {
                console.log('Video id is not valid');
            }
        });
    }
    setContentExtention() {
        const format = (this.format).toLowerCase();
        this.filename = `${this.id}.${format}`;
    }
    setContentThumbnail() {
        this.thumbnail = `https://img.youtube.com/vi/${this.id}/0.jpg`;
    }
}
class Content extends GetherData {
    constructor({ url, settings }) {
        super();
        this.url = url;
        this.format = settings.format;
        this.quality = settings.quality;
    }
    initialize() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.setContentId();
            this.setContentExtention();
            yield this.setContentTitle();
            this.setContentThumbnail();
        });
    }
}
exports.default = Content;