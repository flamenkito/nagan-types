"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var serializr_1 = require("serializr");
var nagan_1 = require("./nagan");
var serializers_1 = require("./serializers");
var asOptions = serializr_1.custom(serializers_1.Serializers.error, function (value) {
    switch (value.type) {
        case 'image':
            return serializr_1.deserialize(ImageOptions, value);
        case 'leaflet':
            return serializr_1.deserialize(LeafletOptions, value);
        default:
            throw new Error('Invalid map type');
    }
});
var LeafletOptions = /** @class */ (function () {
    function LeafletOptions() {
        this.type = 'leaflet';
    }
    __decorate([
        serializr_1.serializable(serializers_1.Serializers.value('leaflet'))
    ], LeafletOptions.prototype, "type", void 0);
    __decorate([
        serializr_1.serializable
    ], LeafletOptions.prototype, "dpi", void 0);
    __decorate([
        serializr_1.serializable(serializr_1.list(serializr_1.primitive()))
    ], LeafletOptions.prototype, "center", void 0);
    __decorate([
        serializr_1.serializable
    ], LeafletOptions.prototype, "zoom", void 0);
    return LeafletOptions;
}());
exports.LeafletOptions = LeafletOptions;
var ImageOptions = /** @class */ (function () {
    function ImageOptions() {
        this.type = 'image';
    }
    __decorate([
        serializr_1.serializable(serializers_1.Serializers.value('image'))
    ], ImageOptions.prototype, "type", void 0);
    __decorate([
        serializr_1.serializable
    ], ImageOptions.prototype, "url", void 0);
    __decorate([
        serializr_1.serializable(serializers_1.Serializers.anyType)
    ], ImageOptions.prototype, "style", void 0);
    return ImageOptions;
}());
exports.ImageOptions = ImageOptions;
var MapDocument = /** @class */ (function () {
    function MapDocument() {
        this.type = 'map';
    }
    MapDocument.from = function (data) {
        return serializr_1.deserialize(MapDocument, data);
    };
    __decorate([
        serializr_1.serializable
    ], MapDocument.prototype, "_id", void 0);
    __decorate([
        serializr_1.serializable
    ], MapDocument.prototype, "_rev", void 0);
    __decorate([
        serializr_1.serializable(serializers_1.Serializers.value('map'))
    ], MapDocument.prototype, "type", void 0);
    __decorate([
        serializr_1.serializable
    ], MapDocument.prototype, "_deleted", void 0);
    __decorate([
        serializr_1.serializable
    ], MapDocument.prototype, "enabled", void 0);
    __decorate([
        serializr_1.serializable
    ], MapDocument.prototype, "name", void 0);
    __decorate([
        serializr_1.serializable
    ], MapDocument.prototype, "description", void 0);
    __decorate([
        serializr_1.serializable
    ], MapDocument.prototype, "icon", void 0);
    __decorate([
        serializr_1.serializable(serializr_1.list(serializr_1.primitive()))
    ], MapDocument.prototype, "availableLayerIds", void 0);
    __decorate([
        serializr_1.serializable(serializr_1.list(serializr_1.primitive()))
    ], MapDocument.prototype, "visibleLayerIds", void 0);
    __decorate([
        serializr_1.serializable(serializr_1.list(serializr_1.object(nagan_1.Nagan.Widget)))
    ], MapDocument.prototype, "widgets", void 0);
    __decorate([
        serializr_1.serializable(asOptions)
    ], MapDocument.prototype, "options", void 0);
    return MapDocument;
}());
exports.MapDocument = MapDocument;
