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
var LayerDocument = /** @class */ (function () {
    function LayerDocument() {
        this.type = 'layer';
    }
    LayerDocument.from = function (data) {
        return serializr_1.deserialize(LayerDocument, data);
    };
    __decorate([
        serializr_1.serializable
    ], LayerDocument.prototype, "_id", void 0);
    __decorate([
        serializr_1.serializable
    ], LayerDocument.prototype, "_rev", void 0);
    __decorate([
        serializr_1.serializable(serializers_1.Serializers.value('layer'))
    ], LayerDocument.prototype, "type", void 0);
    __decorate([
        serializr_1.serializable
    ], LayerDocument.prototype, "_deleted", void 0);
    __decorate([
        serializr_1.serializable
    ], LayerDocument.prototype, "enabled", void 0);
    __decorate([
        serializr_1.serializable
    ], LayerDocument.prototype, "name", void 0);
    __decorate([
        serializr_1.serializable
    ], LayerDocument.prototype, "description", void 0);
    __decorate([
        serializr_1.serializable
    ], LayerDocument.prototype, "icon", void 0);
    return LayerDocument;
}());
exports.LayerDocument = LayerDocument;
