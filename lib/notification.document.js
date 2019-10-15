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
var NotificationDocument = /** @class */ (function () {
    function NotificationDocument() {
        this.type = 'notification';
    }
    NotificationDocument.from = function (data) {
        return serializr_1.deserialize(NotificationDocument, data);
    };
    __decorate([
        serializr_1.serializable
    ], NotificationDocument.prototype, "_id", void 0);
    __decorate([
        serializr_1.serializable
    ], NotificationDocument.prototype, "_rev", void 0);
    __decorate([
        serializr_1.serializable(serializers_1.Serializers.value('notification'))
    ], NotificationDocument.prototype, "type", void 0);
    __decorate([
        serializr_1.serializable
    ], NotificationDocument.prototype, "_deleted", void 0);
    __decorate([
        serializr_1.serializable(serializr_1.list(serializr_1.primitive()))
    ], NotificationDocument.prototype, "services", void 0);
    __decorate([
        serializr_1.serializable(serializr_1.map(serializr_1.list(serializr_1.primitive())))
    ], NotificationDocument.prototype, "actions", void 0);
    __decorate([
        serializr_1.serializable(serializr_1.list(serializr_1.primitive()))
    ], NotificationDocument.prototype, "users", void 0);
    __decorate([
        serializr_1.serializable
    ], NotificationDocument.prototype, "trigger", void 0);
    return NotificationDocument;
}());
exports.NotificationDocument = NotificationDocument;
