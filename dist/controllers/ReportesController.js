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
exports.getMetricasProyectos = exports.getCantidadProyectos = void 0;
const moment_1 = __importDefault(require("moment"));
const DonacionesModels_1 = __importDefault(require("../models/DonacionesModels"));
const ProyectosModels_1 = __importDefault(require("../models/ProyectosModels"));
const mongoose = require('mongoose');
const getCantidadProyectos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { proyecto_id } = req.params;
    try {
        const donaciones = yield DonacionesModels_1.default.find({ proyecto: mongoose.Types.ObjectId(proyecto_id) });
        res.status(200).json({ cantidad: donaciones.length });
    }
    catch (error) {
        res.json({ error: error.message });
    }
});
exports.getCantidadProyectos = getCantidadProyectos;
const getMetricasProyectos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { proyecto_id } = req.params;
    try {
        const donaciones = yield DonacionesModels_1.default.find({ proyecto: mongoose.Types.ObjectId(proyecto_id) });
        const proyectos = yield ProyectosModels_1.default.findById(proyecto_id);
        let mongoAlcanzado = 0;
        donaciones.forEach((element) => {
            mongoAlcanzado += element.monto_donacion;
        });
        const inicio = (0, moment_1.default)(proyectos.fecha_inicio);
        const final = (0, moment_1.default)(proyectos.fecha_objetivo);
        const diasFaltantes = final.diff(inicio, "days");
        const procentajeAlcanzado = ((mongoAlcanzado / proyectos.monto_meta) * 100).toFixed();
        res.status(200).json({ mongoAlcanzado, diasFaltantes, monto_meta: proyectos.monto_meta, procentajeAlcanzado });
    }
    catch (error) {
        res.json({ error: error.message });
    }
});
exports.getMetricasProyectos = getMetricasProyectos;
//# sourceMappingURL=ReportesController.js.map