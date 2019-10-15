import { Nagan } from './nagan';
import { TypeDocument } from './type.document';
export declare class LeafletOptions {
    type: string;
    dpi: number;
    center: [number, number];
    zoom: number;
}
export declare class ImageOptions {
    type: string;
    url: string;
    style: any;
}
export declare class MapDocument implements TypeDocument {
    _id: string;
    _rev: string;
    type: string;
    _deleted: boolean;
    enabled: boolean;
    name: string;
    description: string;
    icon: string;
    availableLayerIds: string[];
    visibleLayerIds: string[];
    widgets: Nagan.Widget[];
    options: LeafletOptions | ImageOptions;
    static from(data: Partial<MapDocument>): MapDocument;
}
//# sourceMappingURL=map.document.d.ts.map