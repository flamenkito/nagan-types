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
// models
var asType = serializers_1.Serializers.values(['map', 'url', 'script', 'collection']);
var MenuRecord = /** @class */ (function () {
    function MenuRecord() {
    }
    MenuRecord.from = function (data) {
        return serializr_1.deserialize(MenuRecord, data);
    };
    __decorate([
        serializr_1.serializable
    ], MenuRecord.prototype, "id", void 0);
    __decorate([
        serializr_1.serializable
    ], MenuRecord.prototype, "title", void 0);
    __decorate([
        serializr_1.serializable(asType)
    ], MenuRecord.prototype, "type", void 0);
    __decorate([
        serializr_1.serializable
    ], MenuRecord.prototype, "action", void 0);
    __decorate([
        serializr_1.serializable
    ], MenuRecord.prototype, "icon", void 0);
    __decorate([
        serializr_1.serializable
    ], MenuRecord.prototype, "hasSubMenu", void 0);
    __decorate([
        serializr_1.serializable
    ], MenuRecord.prototype, "parentId", void 0);
    return MenuRecord;
}());
exports.MenuRecord = MenuRecord;
var MenusDocument = /** @class */ (function () {
    function MenusDocument() {
        this.type = 'menus';
    }
    MenusDocument.from = function (data) {
        return serializr_1.deserialize(MenusDocument, data);
    };
    __decorate([
        serializr_1.serializable
    ], MenusDocument.prototype, "_id", void 0);
    __decorate([
        serializr_1.serializable
    ], MenusDocument.prototype, "_rev", void 0);
    __decorate([
        serializr_1.serializable(serializers_1.Serializers.value('menus'))
    ], MenusDocument.prototype, "type", void 0);
    __decorate([
        serializr_1.serializable
    ], MenusDocument.prototype, "_deleted", void 0);
    __decorate([
        serializr_1.serializable(serializr_1.list(serializr_1.object(MenuRecord)))
    ], MenusDocument.prototype, "menu", void 0);
    return MenusDocument;
}());
exports.MenusDocument = MenusDocument;
