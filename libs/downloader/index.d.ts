import { IContent, ICbProgress, IDwl, ISettings, Input, IDownloadable } from './ifaces';
declare class Downloadable implements IDownloadable {
    path: string;
    content: IContent;
    protected createDownloadable(callback: ICbProgress, fileName?: string): Promise<IDwl>;
}
export default class Ytdl extends Downloadable {
    url: string;
    id: string;
    settings: ISettings;
    content: IContent;
    downloadable: IDwl;
    constructor(input: Input);
    initialize(): Promise<void>;
    getContentInfo(): Promise<IContent>;
    downloadAsync(callback: ICbProgress): Promise<object | void>;
}
export {};
