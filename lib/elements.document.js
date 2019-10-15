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
var Element = /** @class */ (function () {
    function Element() {
    }
    __decorate([
        serializr_1.serializable
    ], Element.prototype, "selector", void 0);
    __decorate([
        serializr_1.serializable
    ], Element.prototype, "script", void 0);
    __decorate([
        serializr_1.serializable
    ], Element.prototype, "icon", void 0);
    __decorate([
        serializr_1.serializable
    ], Element.prototype, "name", void 0);
    __decorate([
        serializr_1.serializable
    ], Element.prototype, "description", void 0);
    return Element;
}());
exports.Element = Element;
var ElementsDocument = /** @class */ (function () {
    function ElementsDocument() {
        this.type = 'elements';
    }
    ElementsDocument.from = function (data) {
        return serializr_1.deserialize(ElementsDocument, data);
    };
    __decorate([
        serializr_1.serializable
    ], ElementsDocument.prototype, "_id", void 0);
    __decorate([
        serializr_1.serializable
    ], ElementsDocument.prototype, "_rev", void 0);
    __decorate([
        serializr_1.serializable(serializers_1.Serializers.value('elements'))
    ], ElementsDocument.prototype, "type", void 0);
    __decorate([
        serializr_1.serializable
    ], ElementsDocument.prototype, "_deleted", void 0);
    __decorate([
        serializr_1.serializable(serializr_1.list(serializr_1.object(Element)))
    ], ElementsDocument.prototype, "elements", void 0);
    return ElementsDocument;
}());
exports.ElementsDocument = ElementsDocument;
