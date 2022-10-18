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
const Donaciones = Schema({
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: "proyecto",
        required: [true, "El id del proyecto es requerido"]
    },
    // donante: {
    //     type: Schema.Types.ObjectId,
    //     ref: "donante",
    //     required: [true, "El id del donante es requerido"]
    // },
    medio_pago: {
        type: String,
        required: [true, "El id de mediosPago  es requerido"],
    },
    monto_donacion: {
        type: Number,
        required: [true, "monto_donacion es requerido"],
    },
    nombre: {
        type: String,
        default: "ANONIMO",
    },
    tipo: {
        type: String,
        required: [true, "tipo  es requerido"],
    },
    fecha: {
        type: Date,
    }
});
Donaciones.methods.toJSON = function () {
    const _a = this.toObject(), { __v, _id } = _a, donante = __rest(_a, ["__v", "_id"]);
    donante.id = _id;
    return donante;
};
exports.default = model('donacion', Donaciones);
//# sourceMappingURL=DonacionesModels.js.map