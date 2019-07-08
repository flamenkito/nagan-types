import { serializable, deserialize, list, primitive, map } from 'serializr';

import { TypeDocument } from './type.document';
import { Serializers } from './serializers';

export class NotificationDocument implements TypeDocument {
  // TypeDocument
  @serializable _id: string;
  @serializable _rev: string;
  @serializable(Serializers.value('notification')) type = 'notification';
  @serializable _deleted: boolean;

  // NotificationDocument
  @serializable(list(primitive())) services: string[];
  @serializable(map(list(primitive()))) actions: string[];
  @serializable(list(primitive())) users: string[];
  @serializable trigger: string;

  static from(data: Partial<NotificationDocument>): NotificationDocument {
    return deserialize(NotificationDocument, data);
  }
}
