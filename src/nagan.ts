import { serializable, list, primitive } from 'serializr';

import { Serializers } from './serializers';
import { TypeDocument } from './type.document';

type Mapper<State> = (subscriptions: TypeDocument[]) => State;

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

    // get widget position or map it from the subscriptions
    export function getPosition(
      widget: Widget,
      sources: TypeDocument[]
    ): Position {
      const widgetSubscriptions = sources.filter(doc => {
        return widget.subscriptions.includes(doc._id);
      });

      try {
        if (widget.positionMapper) {
          /* tslint:disable:no-eval */
          const center = eval(widget.positionMapper) as Mapper<Position>;
          return center(widgetSubscriptions);
          /* tslint:enable:no-eval */
        }

        // no subscriptions
        if (widgetSubscriptions.length === 0) {
          return widget.position;
        }

        // first subscription contains no center
        const { center } = widgetSubscriptions[0] as any;
        if (!center) {
          return widget.position;
        }

        if (!center.lat || !center.lng) {
          throw new Error('Invalid center');
        }

        return center;
      } catch (err) {
        return widget.position;
      }
    }
  }

  // get list of widget subscriptions or map the state
  export function getState(widget: Nagan.Widget, sources: TypeDocument[]): any {
    const widgetSubscriptions = sources.filter(doc => {
      return widget.subscriptions.includes(doc._id);
    });

    // no services
    if (!widgetSubscriptions.length) {
      return widget.state;
    }

    try {
      if (widget.stateMapper) {
        /* tslint:disable:no-eval */
        const stateMapper = eval(widget.stateMapper) as Mapper<any>;
        return stateMapper(widgetSubscriptions);
        /* tslint:enable:no-eval */
      }
    } catch (err) {
      return widget.state;
    }

    // defaults
    return widgetSubscriptions;
  }
}
