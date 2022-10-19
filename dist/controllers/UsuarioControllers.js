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
exports.deleteAllDuplicados = exports.deleteDuplicados = exports.getUsuarios = exports.deleteDuplicadosHelper = void 0;
const CierreDiarioModels_1 = __importDefault(require("../models/CierreDiarioModels"));
const deleteDuplicadosHelper = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { empresas_id, consecutivo_combustible } = req;
    try {
        const detalladoCierre = yield CierreDiarioModels_1.default.aggregate()
            .match({ empresas_id: empresas_id, "data.ventas_combustible.consecutivo": consecutivo_combustible });
        // res.send(detalladoCierre)
        if (detalladoCierre.length > 1) {
            let duplocadasABorrar = [];
            console.log(consecutivo_combustible);
            detalladoCierre.map((detalladoItem, index) => {
                if (index === 0)
                    return;
                duplocadasABorrar.push(CierreDiarioModels_1.default.findByIdAndDelete(detalladoItem._id));
            });
            const backup = yield Promise.all(duplocadasABorrar);
            return {
                consecutivo_combustible,
                backup
            };
        }
        return { consecutivo_combustible, backup: [] };
    }
    catch (error) {
        return { consecutivo_combustible, error: error.message };
    }
});
exports.deleteDuplicadosHelper = deleteDuplicadosHelper;
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { empresas_id } = req.body;
        const detalladoCierre = yield CierreDiarioModels_1.default.find({ empresas_id: empresas_id /* , jornada_id: jornada_id */ });
        let actualizaciones = [];
        detalladoCierre.map((detalladoItem) => {
            var _a, _b, _c, _d, _e, _f;
            let hashCombustibles = {};
            let hashCanastilla = {};
            let hashKisco = {};
            const ventas_combustible_unicas = (_b = (_a = detalladoItem.data.ventas_combustible) === null || _a === void 0 ? void 0 : _a.filter((ventaCombustible) => hashCombustibles[ventaCombustible.venta] ? false : hashCombustibles[ventaCombustible.venta] = true)) !== null && _b !== void 0 ? _b : [];
            const ventas_canastilla_unicas = (_d = (_c = detalladoItem.data.ventas_canastilla) === null || _c === void 0 ? void 0 : _c.filter((ventaCanastilla) => hashCanastilla[ventaCanastilla.venta] ? false : hashCanastilla[ventaCanastilla.venta] = true)) !== null && _d !== void 0 ? _d : [];
            const ventas_kiosco_unicas = (_f = (_e = detalladoItem.data.ventas_kiosco) === null || _e === void 0 ? void 0 : _e.filter((ventaKiosco) => hashKisco[ventaKiosco.venta] ? false : hashKisco[ventaKiosco.venta] = true)) !== null && _f !== void 0 ? _f : [];
            if (!!detalladoItem.data.ventas_combustible /* && ventas_combustible_unicas?.length !== detalladoItem.data.ventas_combustible?.length */)
                detalladoItem.data.ventas_combustible = ventas_combustible_unicas;
            if (!!detalladoItem.data.ventas_canastilla /* && ventas_canastilla_unicas?.length !== detalladoItem.data.ventas_canastilla?.length */)
                detalladoItem.data.ventas_canastilla = ventas_canastilla_unicas;
            if (!!detalladoItem.data.ventas_kiosco /* && ventas_kiosco_unicas?.length !== detalladoItem.data.ventas_kiosco?.length */)
                detalladoItem.data.ventas_kiosco = ventas_kiosco_unicas;
            actualizaciones.push(CierreDiarioModels_1.default.findByIdAndUpdate(detalladoItem._id, { data: detalladoItem.data }));
        });
        const backup = yield Promise.all(actualizaciones);
        res.send({
            backup,
            cierres_modificados: detalladoCierre
        });
    }
    catch (error) {
        res.json({ error: error.message });
    }
});
exports.getUsuarios = getUsuarios;
const deleteDuplicados = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { empresas_id, consecutivo_combustible } = req.body;
        console.log(empresas_id);
        const detalladoCierre = yield CierreDiarioModels_1.default.aggregate()
            .match({ empresas_id: empresas_id, "data.ventas_combustible.consecutivo": consecutivo_combustible });
        // res.send(detalladoCierre)
        if (detalladoCierre.length > 1) {
            let duplocadasABorrar = [];
            detalladoCierre.map((detalladoItem, index) => {
                if (index === 0)
                    return;
                duplocadasABorrar.push(CierreDiarioModels_1.default.findByIdAndDelete(detalladoItem._id));
            });
            const backup = yield Promise.all(duplocadasABorrar);
            return res.send({
                backup
            });
        }
        res.send({
            msg: "No hay registros duplicados con ese consecutivo"
        });
    }
    catch (error) {
        res.json({ error: error.message });
    }
});
exports.deleteDuplicados = deleteDuplicados;
const deleteAllDuplicados = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { empresas_id } = req.body;
        let borradas = [];
        console.log("first");
        const detalladoCierre = yield CierreDiarioModels_1.default.aggregate().match({ empresas_id: 175, "data.ventas_combustible.consecutivo": "82275 - LIQC" });
        console.log("second");
        let hashCombustibles = {};
        detalladoCierre.map((detalladoItem, index) => {
            var _a, _b;
            const consecutivos_a_borrar = (_b = (_a = detalladoItem.data.ventas_combustible) === null || _a === void 0 ? void 0 : _a.filter((ventaCombustible) => hashCombustibles[ventaCombustible.venta] ? true : hashCombustibles[ventaCombustible.venta] = true)) !== null && _b !== void 0 ? _b : [];
            console.log(consecutivos_a_borrar);
            /*  detalladoItem.data.ventas_combustible.map(async (item: any, index: number) => {
                  const detalladoCierre = await DetalladoCierreDiario.aggregate()
                     .match({ empresas_id: empresas_id, "data.ventas_combustible.consecutivo": item.consecutivo })
                 if (detalladoCierre.length > 1) {
                     let duplocadasABorrar: any[] = [];
                     detalladoCierre.map(async (detalladoItem: any, index: number) => {
                         if (index === 0) return
                         const res = await DetalladoCierreDiario.findByIdAndDelete(detalladoItem._id)
                         borradas.push(res)
                     })
 
 
                 }

            }) */
        });
        res.json({ borradas });
    }
    catch (error) {
        res.json({ error: error.message });
    }
});
exports.deleteAllDuplicados = deleteAllDuplicados;
//# sourceMappingURL=UsuarioControllers.js.map