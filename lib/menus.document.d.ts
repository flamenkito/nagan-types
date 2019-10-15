import { TypeDocument } from './type.document';
export declare class MenuRecord {
    id: number;
    title: string;
    type: string;
    action: string;
    icon: string;
    hasSubMenu: boolean;
    parentId: number;
    static from(data: Partial<MenuRecord>): MenuRecord;
}
export declare class MenusDocument implements TypeDocument {
    _id: string;
    _rev: string;
    type: string;
    _deleted: boolean;
    menu: MenuRecord[];
    static from(data: Partial<MenusDocument>): MenusDocument;
}
//# sourceMappingURL=menus.document.d.ts.map