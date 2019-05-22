import { serializable, deserialize, list, primitive, object } from 'serializr';

import { Nagan } from './nagan';
import { TypeDocument } from './type.document';
import { Serializers } from './serializers';

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

  @serializable(Serializers.mapOptions) options: MapOptions;

  static deserialize(data: Partial<MapDocument>): MapDocument {
    return deserialize(MapDocument, data);
  }
}

export namespace MapDocument {
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
}

type MapOptions = MapDocument.LeafletOptions | MapDocument.ImageOptions;
