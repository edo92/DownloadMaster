"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_native_ytdl_1 = tslib_1.__importDefault(require("react-native-ytdl"));
class Validation {
    constructor(content) {
        this.id = content.id;
        this.url = content.url;
        this.isValid = this.validate();
    }
    basicValidation() {
        // Basic validation (length and type)
        if (typeof this.id === 'string' && this.id.length > 5)
            return true;
        return false;
    }
    validateId() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield react_native_ytdl_1.default.validateID(this.id);
            }
            catch (err) {
                return false;
            }
        });
    }
    validateUrl() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield react_native_ytdl_1.default.validateURL(this.url);
            }
            catch (err) {
                return false;
            }
        });
    }
    validateListAsync(list) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // Combine url and id output 
            return !list.reduce((a, b) => ((a + b) - 1), 0);
        });
    }
    validate() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // First check for basic validation
            if (!this.basicValidation()) {
                this.isValid = false;
                return false;
            }
            // Validate list of validation funcs
            return yield this.validateListAsync([
                yield this.validateUrl(),
                yield this.validateId()
            ]);
        });
    }
}
exports.default = Validation;
