"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const UsuarioControllers_1 = require("../controllers/UsuarioControllers");
const Validaciones_db_1 = require("../helpers/Validaciones-db");
const validarCampos_1 = require("../middlewares/validarCampos");
const router = (0, express_1.Router)();
router.get('/', UsuarioControllers_1.getDonantes);
router.get('/:id', UsuarioControllers_1.getDonante);
router.post("/", [
    (0, express_validator_1.check)('ip', 'Ip es obligatorio').not().isEmpty(),
    validarCampos_1.validarCampos
], UsuarioControllers_1.createDonantes);
router.put('/:id', [
    (0, express_validator_1.check)('id', 'El id no es valido').isMongoId(),
    (0, express_validator_1.check)('id').custom(Validaciones_db_1.existeDonanteById),
    validarCampos_1.validarCampos
], UsuarioControllers_1.updateDonantes);
router.delete('/:id', [
    (0, express_validator_1.check)('id', 'El id no es valido').isMongoId(),
    (0, express_validator_1.check)('id').custom(Validaciones_db_1.existeDonanteById),
    validarCampos_1.validarCampos
], UsuarioControllers_1.deleteDonantes);
exports.default = router;
//# sourceMappingURL=donantes.js.map