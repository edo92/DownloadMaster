"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.System = void 0;
const tslib_1 = require("tslib");
const FileSystem = tslib_1.__importStar(require("expo-file-system"));
class System {
    static createPath(name) {
        return `${FileSystem.cacheDirectory}${name}`;
    }
    static ytlInfoEndpoint(id) {
        return `https://noembed.com/embed?url=https://www.youtube.com/watch?v=${id}`;
    }
    static createDownloadable(url, path, callback) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield FileSystem.createDownloadResumable(url, path, {}, callback);
        });
    }
    static parseProgress({ totalBytesExpectedToWrite, totalBytesWritten }) {
        return {
            total: totalBytesExpectedToWrite,
            current: totalBytesWritten,
            downloaded: (totalBytesWritten / totalBytesExpectedToWrite) * 100 //Convert to percentage
        };
    }
}
exports.System = System;
