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
exports.deleteContacto = exports.updateContacto = exports.createContacto = exports.getContacto = exports.getContactos = void 0;
const ContactosModels_1 = __importDefault(require("../models/ContactosModels"));
const getContactos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Contactos = yield ContactosModels_1.default.find({});
        res.status(200).send(Contactos);
    }
    catch (error) {
        res.json({ error: error.message });
    }
});
exports.getContactos = getContactos;
const getContacto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const Donacion = yield ContactosModels_1.default.findById(id);
        res.status(200).send(Donacion);
    }
    catch (error) {
        res.json({ error: error.message });
    }
});
exports.getContacto = getContacto;
const createContacto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, message, name, asunto } = req.body;
        const Donacion = new ContactosModels_1.default({ email, message, name, asunto });
        //Guardar en base de datos
        yield Donacion.save();
        res.status(201).send(Donacion);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});
exports.createContacto = createContacto;
const updateContacto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { email, message, name } = req.body;
        let updateContacto = {};
        if (email !== undefined)
            updateContacto = Object.assign(Object.assign({}, updateContacto), { email });
        if (message !== undefined)
            updateContacto = Object.assign(Object.assign({}, updateContacto), { message });
        if (name !== undefined)
            updateContacto = Object.assign(Object.assign({}, updateContacto), { name });
        //Actualizar en base de datos
        const Donacion = yield ContactosModels_1.default.findByIdAndUpdate(id, updateContacto);
        res.status(201).send(Donacion);
    }
    catch (error) {
        res.status(500).json(error.message);
    }
});
exports.updateContacto = updateContacto;
const deleteContacto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        //Efectuar eliminacion
        const Donacion = yield ContactosModels_1.default.findByIdAndDelete(id);
        res.send(Donacion);
    }
    catch (error) {
        res.json({ error: error.message });
    }
});
exports.deleteContacto = deleteContacto;
//# sourceMappingURL=ContactosController.js.map