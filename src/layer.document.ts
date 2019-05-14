import { serializable, deserialize } from 'serializr';

import { TypeDocument } from './type.document';
import { Serializers } from './serializers';

export class LayerDocument implements TypeDocument {
  // TypeDocument
  @serializable _id: string;
  @serializable _rev: string;
  @serializable(Serializers.value('layer')) type = 'layer';

  // LayerDocument
  @serializable enabled: boolean;
  @serializable name: string;
  @serializable description: string;
  @serializable icon: string;

  static deserialize(data: Partial<LayerDocument>): LayerDocument {
    return deserialize(LayerDocument, data);
  }
}
