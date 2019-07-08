import { serializable, deserialize } from 'serializr';

import { TypeDocument } from './type.document';
import { Serializers } from './serializers';

export class LayerDocument implements TypeDocument {
  // TypeDocument
  @serializable _id: string;
  @serializable _rev: string;
  @serializable(Serializers.value('layer')) type = 'layer';
  @serializable _deleted: boolean;

  // LayerDocument
  @serializable enabled: boolean;
  @serializable name: string;
  @serializable description: string;
  @serializable icon: string;

  static from(data: Partial<LayerDocument>): LayerDocument {
    return deserialize(LayerDocument, data);
  }
}
