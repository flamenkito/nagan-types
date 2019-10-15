import { TypeDocument } from './type.document';
import { Nagan } from './nagan';
export declare class ServiceDocument implements TypeDocument {
    _id: string;
    _rev: string;
    type: string;
    _deleted: boolean;
    state: string;
    value: string;
    lasts: Nagan.Last[];
    meta: any;
    static from(data: Partial<ServiceDocument>): ServiceDocument;
}
//# sourceMappingURL=service.document.d.ts.map