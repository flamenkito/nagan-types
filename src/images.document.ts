import { serializable, deserialize, list, object } from 'serializr';

import { TypeDocument } from './type.document';
import { Serializers } from './serializers';

// models
const asImageType = Serializers.values(['maps', 'icon', 'avatar']);

export class ImageRecord {
  @serializable(asImageType) type: string;
  @serializable url: string;
  @serializable icon: string;
  @serializable name: string;

  static from(data: Partial<ImageRecord>): ImageRecord {
    return deserialize(ImageRecord, data);
  }
}

export class ImagesDocument implements TypeDocument {
  // TypeDocument
  @serializable _id: string;
  @serializable _rev: string;
  @serializable(Serializers.value('images')) type = 'images';
  @serializable _deleted: boolean;

  // ImagesDocument
  @serializable(list(object(ImageRecord))) images: ImageRecord[];
  @serializable(list(object(ImageRecord))) maps: ImageRecord[];
  @serializable(list(object(ImageRecord))) icons: ImageRecord[];
  @serializable(list(object(ImageRecord))) avatars: ImageRecord[];

  static from(data: Partial<ImagesDocument>): ImagesDocument {
    return deserialize(ImagesDocument, data);
  }
}
