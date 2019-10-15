import { TypeDocument } from './type.document';
export declare class NotificationDocument implements TypeDocument {
    _id: string;
    _rev: string;
    type: string;
    _deleted: boolean;
    services: string[];
    actions: string[];
    users: string[];
    trigger: string;
    static from(data: Partial<NotificationDocument>): NotificationDocument;
}
//# sourceMappingURL=notification.document.d.ts.map