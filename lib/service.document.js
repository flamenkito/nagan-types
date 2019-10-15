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
var ServiceDocument = /** @class */ (function () {
    function ServiceDocument() {
        this.type = 'service';
    }
    ServiceDocument.from = function (data) {
        return serializr_1.deserialize(ServiceDocument, data);
    };
    __decorate([
        serializr_1.serializable
    ], ServiceDocument.prototype, "_id", void 0);
    __decorate([
        serializr_1.serializable
    ], ServiceDocument.prototype, "_rev", void 0);
    __decorate([
        serializr_1.serializable(serializers_1.Serializers.value('service'))
    ], ServiceDocument.prototype, "type", void 0);
    __decorate([
        serializr_1.serializable
    ], ServiceDocument.prototype, "_deleted", void 0);
    __decorate([
        serializr_1.serializable
    ], ServiceDocument.prototype, "state", void 0);
    __decorate([
        serializr_1.serializable
    ], ServiceDocument.prototype, "value", void 0);
    __decorate([
        serializr_1.serializable(serializr_1.list(serializr_1.object(nagan_1.Nagan.Last)))
    ], ServiceDocument.prototype, "lasts", void 0);
    __decorate([
        serializr_1.serializable(serializers_1.Serializers.anyType)
    ], ServiceDocument.prototype, "meta", void 0);
    return ServiceDocument;
}());
exports.ServiceDocument = ServiceDocument;
