"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.print = void 0;
var util_1 = require("util");
function message(TYPE) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (mp.console) {
        try {
            return mp.console[TYPE](util_1.format.apply(void 0, __spreadArrays([''], args)) + "\n");
        }
        catch (err) {
            return mp.console.logError(err.stack + "\n");
        }
    }
    else {
        return console.log.apply(console, args);
    }
}
exports.print = {
    info: function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        return message.apply(void 0, __spreadArrays(["logInfo" /* INFO */], params));
    },
    warn: function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        return message.apply(void 0, __spreadArrays(["logWarning" /* WARN */], params));
    },
    error: function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        return message.apply(void 0, __spreadArrays(["logError" /* ERROR */], params));
    },
    fatal: function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        return message.apply(void 0, __spreadArrays(["logFatal" /* FATAL */], params));
    },
    clear: function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        return message.apply(void 0, __spreadArrays(["clear" /* CLEAR */], params));
    },
    reset: function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        return message.apply(void 0, __spreadArrays(["reset" /* RESET */], params));
    }
};
