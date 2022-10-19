"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.existeDetalleByConsecutivo = void 0;
const CierreDiarioModels_1 = __importDefault(require("../models/CierreDiarioModels"));
const existeDetalleByConsecutivo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existeMovimiento = yield CierreDiarioModels_1.default.findById(id);
    if (!existeMovimiento) {
        throw new Error(`No existe un usuario con id: ${id} `);
    }
    else {
        return true;
    }
});
exports.existeDetalleByConsecutivo = existeDetalleByConsecutivo;
//# sourceMappingURL=Validaciones-db.js.map