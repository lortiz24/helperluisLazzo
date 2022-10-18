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
exports.deleteDonantes = exports.updateDonantes = exports.createDonantes = exports.getDonante = exports.getDonantes = void 0;
const mongoose_1 = require("mongoose");
const UsuariosModels_1 = __importDefault(require("../models/UsuariosModels"));
const getDonantes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const donantes = yield UsuariosModels_1.default.find({});
        res.send(donantes);
    }
    catch (error) {
        res.json({ error: error.message });
    }
});
exports.getDonantes = getDonantes;
const getDonante = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const donantes = yield UsuariosModels_1.default.findById(id);
        res.send(donantes);
    }
    catch (error) {
        res.json({ error: error.message });
    }
});
exports.getDonante = getDonante;
const createDonantes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { ip } = req.body;
        const donante = new UsuariosModels_1.default({ ip });
        //Guardar en base de datos
        yield donante.save();
        res.send(donante);
    }
    catch (error) {
        res.json({ error: error.message });
    }
});
exports.createDonantes = createDonantes;
const updateDonantes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { ip } = req.body;
    //Actualizar en base de datos
    const donante = yield UsuariosModels_1.default.findByIdAndUpdate(new mongoose_1.mongo.ObjectId(id), { ip });
    res.send(donante);
});
exports.updateDonantes = updateDonantes;
const deleteDonantes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        //Efectuar eliminacion
        const donante = yield UsuariosModels_1.default.findByIdAndDelete(id);
        res.json({ donante });
    }
    catch (error) {
        res.json({ error: error.message });
    }
});
exports.deleteDonantes = deleteDonantes;
//# sourceMappingURL=Donantes.js.map