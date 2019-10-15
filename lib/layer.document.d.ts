import { TypeDocument } from './type.document';
export declare class LayerDocument implements TypeDocument {
    _id: string;
    _rev: string;
    type: string;
    _deleted: boolean;
    enabled: boolean;
    name: string;
    description: string;
    icon: string;
    static from(data: Partial<LayerDocument>): LayerDocument;
}
//# sourceMappingURL=layer.document.d.ts.map