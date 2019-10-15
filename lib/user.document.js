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
var UserDocument = /** @class */ (function () {
    function UserDocument() {
        this.type = 'user';
    }
    UserDocument.from = function (data) {
        return serializr_1.deserialize(UserDocument, data);
    };
    __decorate([
        serializr_1.serializable
    ], UserDocument.prototype, "_id", void 0);
    __decorate([
        serializr_1.serializable
    ], UserDocument.prototype, "_rev", void 0);
    __decorate([
        serializr_1.serializable(serializers_1.Serializers.value('user'))
    ], UserDocument.prototype, "type", void 0);
    __decorate([
        serializr_1.serializable
    ], UserDocument.prototype, "_deleted", void 0);
    __decorate([
        serializr_1.serializable
    ], UserDocument.prototype, "name", void 0);
    __decorate([
        serializr_1.serializable(serializr_1.list(serializr_1.primitive()))
    ], UserDocument.prototype, "roles", void 0);
    __decorate([
        serializr_1.serializable
    ], UserDocument.prototype, "allowedInstances", void 0);
    __decorate([
        serializr_1.serializable
    ], UserDocument.prototype, "description", void 0);
    __decorate([
        serializr_1.serializable
    ], UserDocument.prototype, "avatar", void 0);
    __decorate([
        serializr_1.serializable(serializr_1.object(nagan_1.Nagan.Access))
    ], UserDocument.prototype, "access", void 0);
    return UserDocument;
}());
exports.UserDocument = UserDocument;
