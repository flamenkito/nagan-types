import { serializable, deserialize, object, list } from 'serializr';

import { TypeDocument } from './type.document';

class Last {
  @serializable timestamp: number;
  @serializable state: string;
}

class Center {
  @serializable lat: number;
  @serializable lng: number;
}

export class ServiceDocument implements TypeDocument {
  // TypeDocument
  @serializable _id: string;
  @serializable _rev: string;
  @serializable type = 'service';

  // ServiceDocument
  @serializable(object(Center)) center?: Center;
  @serializable state: string;
  @serializable(list(object(Last))) lasts: Last[];

  static deserialize(data: Partial<ServiceDocument>): ServiceDocument {
    return deserialize(ServiceDocument, data);
  }
}
