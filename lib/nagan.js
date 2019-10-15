"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var serializr_1 = require("serializr");
var serializers_1 = require("./serializers");
var asPosition = serializr_1.custom(serializers_1.Serializers.error, function (value) {
    switch (value.type) {
        case 'point':
            return serializr_1.deserialize(Nagan.Widget.Point, value);
        case 'latlng':
            return serializr_1.deserialize(Nagan.Widget.LatLng, value);
        case 'fixed':
            return serializr_1.deserialize(Nagan.Widget.Fixed, value);
        default:
            throw new Error('Invalid position type');
    }
});
var asNotify = serializers_1.Serializers.values(['bounce', 'none']);
var Nagan;
(function (Nagan) {
    var Access = /** @class */ (function () {
        function Access() {
        }
        __decorate([
            serializr_1.serializable
        ], Access.prototype, "state", void 0);
        __decorate([
            serializr_1.serializable
        ], Access.prototype, "defaultMap", void 0);
        __decorate([
            serializr_1.serializable(serializr_1.list(serializr_1.primitive()))
        ], Access.prototype, "maps", void 0);
        __decorate([
            serializr_1.serializable(serializr_1.list(serializr_1.primitive()))
        ], Access.prototype, "layers", void 0);
        __decorate([
            serializr_1.serializable(serializr_1.list(serializr_1.primitive()))
        ], Access.prototype, "services", void 0);
        return Access;
    }());
    Nagan.Access = Access;
    var Last = /** @class */ (function () {
        function Last() {
        }
        __decorate([
            serializr_1.serializable
        ], Last.prototype, "timestamp", void 0);
        __decorate([
            serializr_1.serializable
        ], Last.prototype, "state", void 0);
        return Last;
    }());
    Nagan.Last = Last;
    var Widget = /** @class */ (function () {
        function Widget() {
            // notify effect
            this.notify = 'bounce';
            this.scale = 1.0;
            this.width = 600;
        }
        Widget.from = function (data) {
            return serializr_1.deserialize(Widget, data);
        };
        __decorate([
            serializr_1.serializable
        ], Widget.prototype, "id", void 0);
        __decorate([
            serializr_1.serializable
        ], Widget.prototype, "layerId", void 0);
        __decorate([
            serializr_1.serializable
        ], Widget.prototype, "locked", void 0);
        __decorate([
            serializr_1.serializable
        ], Widget.prototype, "scalable", void 0);
        __decorate([
            serializr_1.serializable
        ], Widget.prototype, "selector", void 0);
        __decorate([
            serializr_1.serializable(asNotify)
        ], Widget.prototype, "notify", void 0);
        __decorate([
            serializr_1.serializable(serializers_1.Serializers.anyType)
        ], Widget.prototype, "style", void 0);
        __decorate([
            serializr_1.serializable
        ], Widget.prototype, "scale", void 0);
        __decorate([
            serializr_1.serializable
        ], Widget.prototype, "width", void 0);
        __decorate([
            serializr_1.serializable(asPosition)
        ], Widget.prototype, "position", void 0);
        __decorate([
            serializr_1.serializable(serializers_1.Serializers.anyType)
        ], Widget.prototype, "options", void 0);
        __decorate([
            serializr_1.serializable(serializers_1.Serializers.anyType)
        ], Widget.prototype, "state", void 0);
        __decorate([
            serializr_1.serializable
        ], Widget.prototype, "styleMapper", void 0);
        __decorate([
            serializr_1.serializable
        ], Widget.prototype, "positionMapper", void 0);
        __decorate([
            serializr_1.serializable
        ], Widget.prototype, "optionsMapper", void 0);
        __decorate([
            serializr_1.serializable
        ], Widget.prototype, "stateMapper", void 0);
        __decorate([
            serializr_1.serializable(serializr_1.list(serializr_1.primitive()))
        ], Widget.prototype, "subscriptions", void 0);
        return Widget;
    }());
    Nagan.Widget = Widget;
    (function (Widget) {
        Widget.STATE_ATTR = 'state';
        Widget.INIT_ATTR = 'options';
        Widget.EVENT_NAME = 'message';
        var Point = /** @class */ (function () {
            function Point() {
                this.type = 'point';
            }
            __decorate([
                serializr_1.serializable(serializers_1.Serializers.value('point'))
            ], Point.prototype, "type", void 0);
            __decorate([
                serializr_1.serializable
            ], Point.prototype, "x", void 0);
            __decorate([
                serializr_1.serializable
            ], Point.prototype, "y", void 0);
            return Point;
        }());
        Widget.Point = Point;
        var LatLng = /** @class */ (function () {
            function LatLng() {
                this.type = 'latlng';
            }
            __decorate([
                serializr_1.serializable(serializers_1.Serializers.value('latlng'))
            ], LatLng.prototype, "type", void 0);
            __decorate([
                serializr_1.serializable
            ], LatLng.prototype, "lat", void 0);
            __decorate([
                serializr_1.serializable
            ], LatLng.prototype, "lng", void 0);
            return LatLng;
        }());
        Widget.LatLng = LatLng;
        var Fixed = /** @class */ (function () {
            function Fixed() {
                this.type = 'fixed';
            }
            __decorate([
                serializr_1.serializable(serializers_1.Serializers.value('fixed'))
            ], Fixed.prototype, "type", void 0);
            __decorate([
                serializr_1.serializable
            ], Fixed.prototype, "position", void 0);
            return Fixed;
        }());
        Widget.Fixed = Fixed;
        // get widget position or map it from the subscriptions
        function getPosition(widget, sources) {
            var widgetSubscriptions = sources.filter(function (doc) {
                return widget.subscriptions.includes(doc._id);
            });
            try {
                if (widget.positionMapper) {
                    /* tslint:disable:no-eval */
                    var center_1 = eval(widget.positionMapper);
                    return center_1(widgetSubscriptions);
                    /* tslint:enable:no-eval */
                }
                // no subscriptions
                if (widgetSubscriptions.length === 0) {
                    return widget.position;
                }
                // first subscription contains no center
                var sub = widgetSubscriptions[0];
                if (!sub || !sub.meta || !sub.meta.center) {
                    return widget.position;
                }
                var center = sub.meta.center;
                if (!center.lat || !center.lng) {
                    throw new Error('Invalid center');
                }
                return center;
            }
            catch (err) {
                return widget.position;
            }
        }
        Widget.getPosition = getPosition;
        // get list of widget subscriptions or map the state
        function getState(widget, sources) {
            var widgetSubscriptions = sources.filter(function (doc) {
                return widget.subscriptions.includes(doc._id);
            });
            // no services
            if (!widgetSubscriptions.length) {
                return widget.state;
            }
            try {
                if (widget.stateMapper) {
                    /* tslint:disable:no-eval */
                    var stateMapper = eval(widget.stateMapper);
                    return stateMapper(widgetSubscriptions);
                    /* tslint:enable:no-eval */
                }
            }
            catch (err) {
                return widget.state;
            }
            // defaults
            return widgetSubscriptions;
        }
        Widget.getState = getState;
    })(Widget = Nagan.Widget || (Nagan.Widget = {}));
})(Nagan = exports.Nagan || (exports.Nagan = {}));
