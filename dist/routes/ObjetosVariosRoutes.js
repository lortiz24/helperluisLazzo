"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const ObjetosVariosControllers_1 = require("../controllers/ObjetosVariosControllers");
const Validaciones_db_1 = require("../helpers/Validaciones-db");
const validarCampos_1 = require("../middlewares/validarCampos");
const router = (0, express_1.Router)();
router.get('/', ObjetosVariosControllers_1.getObjetosVarios);
router.get('/:id', [
    (0, express_validator_1.check)('id', 'El id no es valido').isMongoId(),
    validarCampos_1.validarCampos
], ObjetosVariosControllers_1.getObjetosVario);
router.get('/tipo/:tipo', [
    (0, express_validator_1.check)('tipo', 'El id no es valido').not().isEmpty(),
    validarCampos_1.validarCampos
], ObjetosVariosControllers_1.getObjetosVarioByTipo);
router.post("/", [
    (0, express_validator_1.check)('tipo', 'El tipo es requerido').not().isEmpty(),
    validarCampos_1.validarCampos
], ObjetosVariosControllers_1.createObjetosVario);
router.put('/:id', [
    (0, express_validator_1.check)('id', 'El id no es valido').isMongoId(),
    (0, express_validator_1.check)('id').custom(Validaciones_db_1.existeObjetoById),
    validarCampos_1.validarCampos
], ObjetosVariosControllers_1.updateObjetosVario);
router.delete('/:id', [
    (0, express_validator_1.check)('id', 'El id no es valido').isMongoId(),
    (0, express_validator_1.check)('id').custom(Validaciones_db_1.existeObjetoById),
    validarCampos_1.validarCampos
], ObjetosVariosControllers_1.deleteObjetosVario);
exports.default = router;
//# sourceMappingURL=ObjetosVariosRoutes.js.map