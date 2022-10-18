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
exports.deleteProyecto = exports.updateProyecto = exports.createProyecto = exports.getProyecto = exports.getProyectos = void 0;
const ProyectosModels_1 = __importDefault(require("../models/ProyectosModels"));
const getProyectos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const proyectos = yield ProyectosModels_1.default.find({});
        res.status(200).send(proyectos);
    }
    catch (error) {
        res.json({ error: error.message });
    }
});
exports.getProyectos = getProyectos;
const getProyecto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const proyecto = yield ProyectosModels_1.default.findById(id);
        res.status(200).send(proyecto);
    }
    catch (error) {
        res.json({ error: error.message });
    }
});
exports.getProyecto = getProyecto;
const createProyecto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { descripcion, img, title, other, fecha_inicio, fecha_objetivo, monto_meta } = req.body;
        const proyecto = new ProyectosModels_1.default({ descripcion, title, fecha_inicio });
        if (fecha_objetivo !== undefined)
            proyecto.fecha_objetivo = fecha_objetivo;
        if (monto_meta !== undefined)
            proyecto.monto_meta = monto_meta;
        if (img !== undefined)
            proyecto.img = img;
        if (other !== undefined)
            proyecto.img = other;
        //Guardar en base de datos
        yield proyecto.save();
        res.status(201).send(proyecto);
    }
    catch (error) {
        res.json({ error: error.message });
    }
});
exports.createProyecto = createProyecto;
const updateProyecto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { descripcion, img, title, other, fecha_inicio, fecha_objetivo, monto_meta, monto_recaudado } = req.body;
        let updateProyect = {};
        if (descripcion !== undefined)
            updateProyect = Object.assign(Object.assign({}, updateProyect), { descripcion });
        if (img !== undefined)
            updateProyect = Object.assign(Object.assign({}, updateProyect), { img });
        if (title !== undefined)
            updateProyect = Object.assign(Object.assign({}, updateProyect), { title });
        if (other !== undefined)
            updateProyect = Object.assign(Object.assign({}, updateProyect), { other });
        if (fecha_inicio !== undefined)
            updateProyect = Object.assign(Object.assign({}, updateProyect), { fecha_inicio });
        if (fecha_objetivo !== undefined)
            updateProyect = Object.assign(Object.assign({}, updateProyect), { fecha_objetivo });
        if (monto_meta !== undefined)
            updateProyect = Object.assign(Object.assign({}, updateProyect), { monto_meta });
        if (monto_recaudado !== undefined)
            updateProyect = Object.assign(Object.assign({}, updateProyect), { monto_recaudado });
        console.log(updateProyect);
        //Actualizar en base de datos
        const proyecto = yield ProyectosModels_1.default.findByIdAndUpdate(id, updateProyect);
        res.status(201).send(proyecto);
    }
    catch (error) {
        res.json({ error: error.message });
    }
});
exports.updateProyecto = updateProyecto;
const deleteProyecto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        //Efectuar eliminacion
        const proyecto = yield ProyectosModels_1.default.findByIdAndDelete(id);
        res.send(proyecto);
    }
    catch (error) {
        res.json({ error: error.message });
    }
});
exports.deleteProyecto = deleteProyecto;
//# sourceMappingURL=ProyectosControllers.js.map