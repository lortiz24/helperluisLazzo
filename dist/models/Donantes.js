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
const Usuario = Schema({
    nombre: {
        type: String,
    },
    email: {
        type: String,
        required: [true, "email es requerido"],
    },
    tipo: {
        type: String,
        required: [true, "tipo es requerido"],
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
});
Usuario.methods.toJSON = function () {
    const _a = this.toObject(), { __v, _id } = _a, usuario = __rest(_a, ["__v", "_id"]);
    usuario.uid = _id;
    return usuario;
};
exports.default = model('usuario', Usuario);
//# sourceMappingURL=Donantes.js.map