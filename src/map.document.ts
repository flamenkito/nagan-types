import {
  serializable,
  deserialize,
  list,
  primitive,
  object,
  custom
} from 'serializr';

import { Nagan } from './nagan';
import { TypeDocument } from './type.document';
import { Serializers } from './serializers';

const asOptions = custom(Serializers.error, value => {
  switch (value.type) {
    case 'image':
      return deserialize(ImageOptions, value);
    case 'leaflet':
      return deserialize(LeafletOptions, value);
    default:
      throw new Error('Invalid map type');
  }
});

export class LeafletOptions {
  @serializable(Serializers.value('leaflet')) type = 'leaflet';
  @serializable dpi: number;
  @serializable(list(primitive())) center: [number, number];
  @serializable zoom: number;
}

export class ImageOptions {
  @serializable(Serializers.value('image')) type = 'image';
  @serializable url: string;
  @serializable(Serializers.anyType) style: any;
}

export class MapDocument implements TypeDocument {
  // TypeDocument
  @serializable _id: string;
  @serializable _rev: string;
  @serializable(Serializers.value('map')) type = 'map';

  // MapDocument
  @serializable enabled: boolean;
  @serializable name: string;
  @serializable description: string;
  @serializable icon: string;
  @serializable(list(primitive())) availableLayerIds: string[];
  @serializable(list(primitive())) visibleLayerIds: string[];
  @serializable(list(object(Nagan.Widget))) widgets: Nagan.Widget[];

  @serializable(asOptions) options: LeafletOptions | ImageOptions;

  static from(data: Partial<MapDocument>): MapDocument {
    return deserialize(MapDocument, data);
  }
}
