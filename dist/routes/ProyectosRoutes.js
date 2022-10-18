"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProyectosControllers_1 = require("../controllers/ProyectosControllers");
const express_validator_1 = require("express-validator");
const validarCampos_1 = require("../middlewares/validarCampos");
const Validaciones_db_1 = require("../helpers/Validaciones-db");
const router = (0, express_1.Router)();
router.get('/', ProyectosControllers_1.getProyectos);
router.get('/:id', [
    (0, express_validator_1.check)('id', 'El id no es valido').isMongoId(),
    validarCampos_1.validarCampos
], ProyectosControllers_1.getProyecto);
router.post("/", [
    (0, express_validator_1.check)('descripcion', 'La descripcion es requerida').not().isEmpty(),
    (0, express_validator_1.check)('title', 'title es requerida').not().isEmpty(),
    (0, express_validator_1.check)('fecha_inicio', 'La fecha_inicio es requerida').not().isEmpty(),
    validarCampos_1.validarCampos
], ProyectosControllers_1.createProyecto);
router.put('/:id', [
    (0, express_validator_1.check)('id', 'El id no es valido').isMongoId(),
    (0, express_validator_1.check)('id').custom(Validaciones_db_1.existeProyectoById),
    validarCampos_1.validarCampos
], ProyectosControllers_1.updateProyecto);
router.delete('/:id', [
    (0, express_validator_1.check)('id', 'El id no es valido').isMongoId(),
    (0, express_validator_1.check)('id').custom(Validaciones_db_1.existeProyectoById),
    validarCampos_1.validarCampos
], ProyectosControllers_1.deleteProyecto);
exports.default = router;
//# sourceMappingURL=ProyectosRoutes.js.map