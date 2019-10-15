import { TypeDocument } from './type.document';
export declare class Element {
    selector: string;
    script: string;
    icon: string;
    name: string;
    description: string;
}
export declare class ElementsDocument implements TypeDocument {
    _id: string;
    _rev: string;
    type: string;
    _deleted: boolean;
    elements: Element[];
    static from(data: Partial<ElementsDocument>): ElementsDocument;
}
//# sourceMappingURL=elements.document.d.ts.map