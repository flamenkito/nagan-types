"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var serializr_1 = require("serializr");
var error = function () {
    throw new Error('Can not serialize');
};
var anyType = serializr_1.custom(error, function (v) { return v; });
var value = function (value) {
    return serializr_1.custom(error, function (v) {
        if (v !== value) {
            throw new Error('Invalid value');
        }
        return v;
    });
};
var values = function () {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    return serializr_1.custom(error, function (v) {
        if (values.includes(v)) {
            throw new Error('Invalid value');
        }
        return v;
    });
};
exports.Serializers = {
    error: error,
    anyType: anyType,
    value: value,
    values: values
};
