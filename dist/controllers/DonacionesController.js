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
exports.deleteDonacion = exports.updateDonacion = exports.createDonacion = exports.getDonacion = exports.getDonaciones = void 0;
const moment_1 = __importDefault(require("moment"));
const DonacionesModels_1 = __importDefault(require("../models/DonacionesModels"));
const getDonaciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Donaciones = yield DonacionesModels_1.default.find({});
        res.status(200).send(Donaciones);
    }
    catch (error) {
        res.json({ error: error.message });
    }
});
exports.getDonaciones = getDonaciones;
const getDonacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const Donacion = yield DonacionesModels_1.default.findById(id);
        res.status(200).send(Donacion);
    }
    catch (error) {
        res.json({ error: error.message });
    }
});
exports.getDonacion = getDonacion;
const createDonacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fecha = (0, moment_1.default)().format('YYYY-MM-DD HH:mm:ss');
        const { donante, proyecto, medio_pago, monto_donacion, nombre, tipo } = req.body;
        const Donacion = new DonacionesModels_1.default({ donante, proyecto, medio_pago, monto_donacion, tipo, fecha });
        if (nombre.length !== 0)
            Donacion.nombre = nombre;
        //Guardar en base de datos
        yield Donacion.save();
        res.status(201).send(Donacion);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});
exports.createDonacion = createDonacion;
const updateDonacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { donante, proyecto, medio_pago, monto_donacion, nombre, tipo } = req.body;
        let updateDonacion = {};
        if (tipo !== undefined)
            updateDonacion = Object.assign(Object.assign({}, updateDonacion), { tipo });
        if (nombre !== undefined)
            updateDonacion = Object.assign(Object.assign({}, updateDonacion), { nombre });
        if (medio_pago !== undefined)
            updateDonacion = Object.assign(Object.assign({}, updateDonacion), { medio_pago });
        if (monto_donacion !== undefined)
            updateDonacion = Object.assign(Object.assign({}, updateDonacion), { monto_donacion });
        if (donante !== undefined)
            updateDonacion = Object.assign(Object.assign({}, updateDonacion), { donante });
        if (proyecto !== undefined)
            updateDonacion = Object.assign(Object.assign({}, updateDonacion), { proyecto });
        //Actualizar en base de datos
        const Donacion = yield DonacionesModels_1.default.findByIdAndUpdate(id, updateDonacion);
        res.status(201).send(Donacion);
    }
    catch (error) {
        res.status(500).json(error.message);
    }
});
exports.updateDonacion = updateDonacion;
const deleteDonacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        //Efectuar eliminacion
        const Donacion = yield DonacionesModels_1.default.findByIdAndDelete(id);
        res.send(Donacion);
    }
    catch (error) {
        res.json({ error: error.message });
    }
});
exports.deleteDonacion = deleteDonacion;
//# sourceMappingURL=DonacionesController.js.map