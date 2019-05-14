import { serializable, deserialize, object, list } from 'serializr';

import { TypeDocument } from './type.document';
import { Nagan } from './nagan';
import { Serializers } from './serializers';

export class ServiceDocument implements TypeDocument {
  // TypeDocument
  @serializable _id: string;
  @serializable _rev: string;
  @serializable(Serializers.value('service')) type = 'service';

  // ServiceDocument
  @serializable(object(Nagan.Center)) center?: Nagan.Center;
  @serializable state: string;
  @serializable(list(object(Nagan.Last))) lasts: Nagan.Last[];

  static deserialize(data: Partial<ServiceDocument>): ServiceDocument {
    return deserialize(ServiceDocument, data);
  }
}
