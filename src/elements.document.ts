import { serializable, list, object, deserialize } from 'serializr';

import { TypeDocument } from './type.document';
import { Serializers } from './serializers';

export class Element {
  @serializable selector: string;
  @serializable script: string;
  @serializable icon: string;
  @serializable name: string;
  @serializable description: string;
}

export class ElementsDocument implements TypeDocument {
  // TypeDocument
  @serializable _id: string;
  @serializable _rev: string;
  @serializable(Serializers.value('elements')) type = 'elements';

  // ServiceDocument
  @serializable(list(object(Element))) elements: Element[];

  static from(data: Partial<ElementsDocument>): ElementsDocument {
    return deserialize(ElementsDocument, data);
  }
}
