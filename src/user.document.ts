import { serializable, deserialize, object, list, primitive } from 'serializr';

import { TypeDocument } from './type.document';

export class Nagan {
  @serializable state: string;
  @serializable defaultMap: string;
  @serializable(list(primitive())) maps: string[];
  @serializable(list(primitive())) layers: string[];
  @serializable(list(primitive())) services: string[];
}

export class UserDocument implements TypeDocument {
  // TypeDocument
  @serializable _id: string;
  @serializable _rev: string;
  @serializable type = 'user';

  // UserDocument
  @serializable name: string;
  @serializable(list(primitive())) roles: string[];
  @serializable allowedInstances: number;
  @serializable description: string;
  @serializable avatar: string;
  @serializable(object(Nagan)) nagan: Nagan;

  static deserialize(data: Partial<UserDocument>): UserDocument {
    return deserialize(UserDocument, data);
  }
}
