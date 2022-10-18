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
exports.deleteObjetosVario = exports.updateObjetosVario = exports.createObjetosVario = exports.getObjetosVarioByTipo = exports.getObjetosVario = exports.getObjetosVarios = void 0;
const ObjetosVariosModels_1 = __importDefault(require("../models/ObjetosVariosModels"));
const getObjetosVarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Objetos = yield ObjetosVariosModels_1.default.find({});
        res.status(200).send(Objetos);
    }
    catch (error) {
        res.json({ error: error.message });
    }
});
exports.getObjetosVarios = getObjetosVarios;
const getObjetosVario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const Objeto = yield ObjetosVariosModels_1.default.findById(id);
        res.status(200).send(Objeto);
    }
    catch (error) {
        res.json({ error: error.message });
    }
});
exports.getObjetosVario = getObjetosVario;
const getObjetosVarioByTipo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { tipo } = req.params;
        const Objeto = yield ObjetosVariosModels_1.default.find({ tipo: tipo.toUpperCase() });
        res.status(200).send(Objeto);
    }
    catch (error) {
        res.json({ error: error.message });
    }
});
exports.getObjetosVarioByTipo = getObjetosVarioByTipo;
const createObjetosVario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { descripcion = "", objeto = {}, tipo = "" } = req.body;
        const Objeto = new ObjetosVariosModels_1.default({ tipo: tipo.toUpperCase(), objeto, descripcion });
        //Guardar en base de datos
        yield Objeto.save();
        res.status(201).send(Objeto);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});
exports.createObjetosVario = createObjetosVario;
const updateObjetosVario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { descripcion, objeto, tipo } = req.body;
        let updateObjeto = {};
        if (descripcion !== undefined)
            updateObjeto = Object.assign(Object.assign({}, updateObjeto), { descripcion });
        if (objeto !== undefined)
            updateObjeto = Object.assign(Object.assign({}, updateObjeto), { objeto });
        if (tipo !== undefined)
            updateObjeto = Object.assign(Object.assign({}, updateObjeto), { tipo: tipo.toUpperCase() });
        //Actualizar en base de datos
        const Objeto = yield ObjetosVariosModels_1.default.findByIdAndUpdate(id, updateObjeto);
        res.status(201).send(Objeto);
    }
    catch (error) {
        res.status(500).json(error.message);
    }
});
exports.updateObjetosVario = updateObjetosVario;
const deleteObjetosVario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        //Efectuar eliminacion
        const Objeto = yield ObjetosVariosModels_1.default.findByIdAndDelete(id);
        res.send(Objeto);
    }
    catch (error) {
        res.json({ error: error.message });
    }
});
exports.deleteObjetosVario = deleteObjetosVario;
//# sourceMappingURL=ObjetosVariosControllers.js.map