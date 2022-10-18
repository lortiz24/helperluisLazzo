"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const { Schema, model } = require('mongoose');
const Visitas = Schema({
    ip: {
        type: String,
        unique: false
    },
    fecha: {
        type: String
    },
    action: {
        type: JSON
    }
});
Visitas.methods.toJSON = function () {
    const _a = this.toObject(), { __v, _id } = _a, visita = __rest(_a, ["__v", "_id"]);
    visita.uid = _id;
    return visita;
};
exports.default = model('visita', Visitas);
//# sourceMappingURL=VisitasModels.js.map