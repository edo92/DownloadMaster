import { ISettings } from './ifaces';
declare class GetherData {
    format: string;
    quality: string;
    filename: string;
    url: string;
    id: string;
    title: string;
    thumbnail: string;
    protected setContentTitle(): Promise<void>;
    protected setContentId(): Promise<void>;
    protected setContentExtention(): void;
    protected setContentThumbnail(): void;
}
export default class Content extends GetherData {
    id: string;
    url: string;
    format: string;
    quality: string;
    filename: string;
    protected settings: ISettings;
    constructor({ url, settings }: {
        url: any;
        settings: any;
    });
    initialize(): Promise<void>;
}
export {};
