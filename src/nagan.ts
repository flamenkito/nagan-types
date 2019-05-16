import { serializable, list, primitive, custom, deserialize } from 'serializr';

import { ServiceDocument } from './service.document';
import { Serializers } from './serializers';

export namespace Nagan {
  export class Access {
    @serializable state: string;
    @serializable defaultMap: string;
    @serializable(list(primitive())) maps: string[];
    @serializable(list(primitive())) layers: string[];
    @serializable(list(primitive())) services: string[];
  }

  export class Last {
    @serializable timestamp: number;
    @serializable state: string;
  }

  export class Widget {
    @serializable id: string;
    @serializable layerId: string;
    @serializable locked: boolean;
    @serializable scalable: boolean;
    @serializable dpi: number;

    @serializable selector: string;

    // notify effect
    @serializable(Serializers.notify) notify = 'bounce';

    @serializable(Serializers.anyType) style: any;
    @serializable(Serializers.position) position: Widget.Position;
    @serializable(Serializers.anyType) options: any;
    @serializable(Serializers.anyType) state: any;

    @serializable styleMapper?: string;
    @serializable positionMapper?: string;
    @serializable optionsMapper?: string;
    @serializable stateMapper?: string;

    @serializable(list(primitive())) subscriptions: string[];
  }

  export namespace Widget {
    export class Point {
      @serializable(Serializers.value('point')) type = 'point';
      @serializable x: number;
      @serializable y: number;
    }

    export class LatLng {
      @serializable(Serializers.value('latlng')) type = 'latlng';
      @serializable lat: number;
      @serializable lng: number;
    }

    export class Fixed {
      @serializable(Serializers.value('fixed')) type = 'fixed';
      @serializable position: string;
    }

    export type Position = Point | LatLng | Fixed;
  }
}
