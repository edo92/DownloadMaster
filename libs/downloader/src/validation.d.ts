import { IContent } from './ifaces';
export default class Validation {
    private id;
    private url;
    isValid: boolean | Promise<any>;
    constructor(content: IContent);
    private basicValidation;
    private validateId;
    private validateUrl;
    private validateListAsync;
    private validate;
}
