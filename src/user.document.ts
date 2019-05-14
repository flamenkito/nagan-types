import { serializable, deserialize, object, list, primitive } from 'serializr';

import { Nagan } from './nagan';
import { TypeDocument } from './type.document';
import { Serializers } from './serializers';

export class UserDocument implements TypeDocument {
  // TypeDocument
  @serializable _id: string;
  @serializable _rev: string;
  @serializable(Serializers.value('user')) type = 'user';

  // UserDocument
  @serializable name: string;
  @serializable(list(primitive())) roles: string[];
  @serializable allowedInstances: number;
  @serializable description: string;
  @serializable avatar: string;
  @serializable(object(Nagan.Access)) access: Nagan.Access;

  static deserialize(data: Partial<UserDocument>): UserDocument {
    return deserialize(UserDocument, data);
  }
}
