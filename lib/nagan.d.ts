import { TypeDocument } from './type.document';
import { ServiceDocument } from './service.document';
export declare namespace Nagan {
    class Access {
        state: string;
        defaultMap: string;
        maps: string[];
        layers: string[];
        services: string[];
    }
    class Last {
        timestamp: number;
        state: string;
    }
    class Widget {
        id: string;
        layerId: string;
        locked: boolean;
        scalable: boolean;
        selector: string;
        notify: string;
        style: any;
        scale: number;
        width: number;
        position: Widget.Position;
        options: any;
        state: any;
        styleMapper?: string;
        positionMapper?: string;
        optionsMapper?: string;
        stateMapper?: string;
        subscriptions: string[];
        static from(data: Partial<Widget>): Widget;
    }
    namespace Widget {
        const STATE_ATTR = "state";
        const INIT_ATTR = "options";
        const EVENT_NAME = "message";
        class Point {
            type: string;
            x: number;
            y: number;
        }
        class LatLng {
            type: string;
            lat: number;
            lng: number;
        }
        class Fixed {
            type: string;
            position: string;
        }
        type Position = Point | LatLng | Fixed;
        function getPosition(widget: Widget, sources: ServiceDocument[]): Position;
        function getState(widget: Nagan.Widget, sources: TypeDocument[]): any;
    }
}
//# sourceMappingURL=nagan.d.ts.map