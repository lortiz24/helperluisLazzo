"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const UsuarioControllers_1 = require("../controllers/UsuarioControllers");
const Validaciones_db_1 = require("../helpers/Validaciones-db");
const validarCampos_1 = require("../middlewares/validarCampos");
const router = (0, express_1.Router)();
router.get('/', UsuarioControllers_1.getUsuarios);
router.get('/admin', UsuarioControllers_1.getUsuariosAdmin);
router.get('/:id', UsuarioControllers_1.getUsuario);
router.post("/", [
    (0, express_validator_1.check)('email', 'email es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('nombre', 'nombre es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('tipo', 'tipo es obligatorio').not().isEmpty(),
    validarCampos_1.validarCampos
], UsuarioControllers_1.createUsuario);
router.put('/:id', [
    (0, express_validator_1.check)('id', 'El id no es valido').isMongoId(),
    (0, express_validator_1.check)('id').custom(Validaciones_db_1.existUsuarioById),
    validarCampos_1.validarCampos
], UsuarioControllers_1.updateUsuario);
router.delete('/:id', [
    (0, express_validator_1.check)('id', 'El id no es valido').isMongoId(),
    (0, express_validator_1.check)('id').custom(Validaciones_db_1.existUsuarioById),
    validarCampos_1.validarCampos
], UsuarioControllers_1.deleteUsuario);
exports.default = router;
//# sourceMappingURL=UsuarioRoutes.js.map