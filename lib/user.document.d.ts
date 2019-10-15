import { Nagan } from './nagan';
import { TypeDocument } from './type.document';
export declare class UserDocument implements TypeDocument {
    _id: string;
    _rev: string;
    type: string;
    _deleted: boolean;
    name: string;
    roles: string[];
    allowedInstances: number;
    description: string;
    avatar: string;
    access: Nagan.Access;
    static from(data: Partial<UserDocument>): UserDocument;
}
//# sourceMappingURL=user.document.d.ts.map