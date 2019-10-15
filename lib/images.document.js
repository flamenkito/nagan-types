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
var asImageType = serializers_1.Serializers.values(['maps', 'icon', 'avatar']);
var ImageRecord = /** @class */ (function () {
    function ImageRecord() {
    }
    ImageRecord.from = function (data) {
        return serializr_1.deserialize(ImageRecord, data);
    };
    __decorate([
        serializr_1.serializable(asImageType)
    ], ImageRecord.prototype, "type", void 0);
    __decorate([
        serializr_1.serializable
    ], ImageRecord.prototype, "url", void 0);
    __decorate([
        serializr_1.serializable
    ], ImageRecord.prototype, "icon", void 0);
    __decorate([
        serializr_1.serializable
    ], ImageRecord.prototype, "name", void 0);
    return ImageRecord;
}());
exports.ImageRecord = ImageRecord;
var ImagesDocument = /** @class */ (function () {
    function ImagesDocument() {
        this.type = 'images';
    }
    ImagesDocument.from = function (data) {
        return serializr_1.deserialize(ImagesDocument, data);
    };
    __decorate([
        serializr_1.serializable
    ], ImagesDocument.prototype, "_id", void 0);
    __decorate([
        serializr_1.serializable
    ], ImagesDocument.prototype, "_rev", void 0);
    __decorate([
        serializr_1.serializable(serializers_1.Serializers.value('images'))
    ], ImagesDocument.prototype, "type", void 0);
    __decorate([
        serializr_1.serializable
    ], ImagesDocument.prototype, "_deleted", void 0);
    __decorate([
        serializr_1.serializable(serializr_1.list(serializr_1.object(ImageRecord)))
    ], ImagesDocument.prototype, "images", void 0);
    __decorate([
        serializr_1.serializable(serializr_1.list(serializr_1.object(ImageRecord)))
    ], ImagesDocument.prototype, "maps", void 0);
    __decorate([
        serializr_1.serializable(serializr_1.list(serializr_1.object(ImageRecord)))
    ], ImagesDocument.prototype, "icons", void 0);
    __decorate([
        serializr_1.serializable(serializr_1.list(serializr_1.object(ImageRecord)))
    ], ImagesDocument.prototype, "avatars", void 0);
    return ImagesDocument;
}());
exports.ImagesDocument = ImagesDocument;
