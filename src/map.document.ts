import { serializable, deserialize, list, primitive, object } from 'serializr';

import { Nagan } from './nagan';
import { TypeDocument } from './type.document';
import { Serializers } from './serializers';

const mapType = Serializers.values('leaflet', 'map');

export class MapDocument implements TypeDocument {
  // TypeDocument
  @serializable _id: string;
  @serializable _rev: string;
  @serializable(Serializers.value('map')) type = 'map';

  // MapDocument
  @serializable(mapType) mapType: 'leaflet' | 'image';
  @serializable enabled: boolean;
  @serializable name: string;
  @serializable description: string;
  @serializable icon: string;
  @serializable(list(primitive())) availableLayerIds: string[];
  @serializable(list(object(Nagan.Widget))) widgets: Nagan.Widget[];

  static deserialize(data: Partial<MapDocument>): MapDocument {
    return deserialize(MapDocument, data);
  }
}
