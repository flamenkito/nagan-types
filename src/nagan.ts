import { serializable, list, primitive } from 'serializr';

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

  export class Center {
    @serializable lat: number;
    @serializable lng: number;
  }

  export class Widget {
    @serializable id: string;
    @serializable layerId: string;
    @serializable locked: boolean;
    @serializable selector: string;
    @serializable(Serializers.anyType) style: Object;
    @serializable(Serializers.anyType) options: Object;
    // center?: Nagan.Center | (subs: ServiceDocument[]) => Nagan.Center;
    @serializable mapper?: (subs: ServiceDocument[]) => any;
    @serializable(list(primitive())) subscriptions: string[];
  }
}
