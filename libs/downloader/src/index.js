"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_native_ytdl_1 = tslib_1.__importDefault(require("react-native-ytdl"));
const helpers_1 = require("./helpers");
const validation_1 = tslib_1.__importDefault(require("./validation"));
const content_1 = tslib_1.__importDefault(require("./content"));
class Downloadable {
    createDownloadable(callback, fileName) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { url, filename } = yield this.content;
            // Create path to save file to
            this.path = helpers_1.System.createPath(fileName || filename);
            // Get downloadable url
            const urls = yield react_native_ytdl_1.default(url, { quality: 'highestaudio' });
            // Parse progress to percentage
            const progressCb = progress => callback(helpers_1.System.parseProgress(progress));
            // return downloadable object
            return yield helpers_1.System.createDownloadable(urls[0].url, this.path, progressCb);
        });
    }
}
class Ytdl extends Downloadable {
    constructor(input) {
        super();
        this.initialized = false;
        this.url = input.url;
        this.settings = input.settings;
        this.content = new content_1.default(input);
    }
    setInitStatus(status) {
        this.initialized = status;
    }
    initialize() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.content.initialize();
            this.setInitStatus(false);
        });
    }
    getContentInfo() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this.initialized) {
                yield this.initialize();
            }
            return this.content;
        });
    }
    downloadAsync(callback) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // Initialize which gets content information(id,title,thumb.,etc)
            if (!this.initialized) {
                yield this.initialize();
            }
            // Validate content -> url/id
            const validate = new validation_1.default(this.content);
            if (yield !validate.isValid) {
                return;
            }
            // Create donwloadable & resumable content object
            this.downloadable = yield this.createDownloadable(callback);
            let { status, uri } = yield this.downloadable.downloadAsync();
            // Return undef || obj{status,uri}
            if (status !== 200)
                return;
            return { status, uri };
        });
    }
}
exports.default = Ytdl;
