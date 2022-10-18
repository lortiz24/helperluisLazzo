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
exports.createVisita = exports.getVisitas = void 0;
const moment_1 = __importDefault(require("moment"));
const VisitasModels_1 = __importDefault(require("../models/VisitasModels"));
const getVisitas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Visitas = yield VisitasModels_1.default.find({});
        res.status(200).send(Visitas);
    }
    catch (error) {
        res.json({ error: error.message });
    }
});
exports.getVisitas = getVisitas;
const createVisita = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ip = req.ip;
    try {
        const fechaLocal = Date.now();
        const { fecha = (0, moment_1.default)(fechaLocal).format('YYYY-MM-DD HH:mm-ss'), action = { type: 'visita' } } = req.body;
        const Visita = new VisitasModels_1.default({ fecha, ip, action });
        yield Visita.save();
        res.status(201).send(Visita);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});
exports.createVisita = createVisita;
//# sourceMappingURL=VisitasController.js.map