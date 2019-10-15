import { TypeDocument } from './type.document';
export declare class ImageRecord {
    type: string;
    url: string;
    icon: string;
    name: string;
    static from(data: Partial<ImageRecord>): ImageRecord;
}
export declare class ImagesDocument implements TypeDocument {
    _id: string;
    _rev: string;
    type: string;
    _deleted: boolean;
    images: ImageRecord[];
    maps: ImageRecord[];
    icons: ImageRecord[];
    avatars: ImageRecord[];
    static from(data: Partial<ImagesDocument>): ImagesDocument;
}
//# sourceMappingURL=images.document.d.ts.map