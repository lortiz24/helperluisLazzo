"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const ContactosController_1 = require("../controllers/ContactosController");
const Validaciones_db_1 = require("../helpers/Validaciones-db");
const validarCampos_1 = require("../middlewares/validarCampos");
const router = (0, express_1.Router)();
router.get('/', ContactosController_1.getContactos);
router.get('/:id', [
    (0, express_validator_1.check)('id', 'El id no es valido').isMongoId(),
    validarCampos_1.validarCampos
], ContactosController_1.getContacto);
router.post("/", [
    (0, express_validator_1.check)('name', 'El name es requerido').not().isEmpty(),
    (0, express_validator_1.check)('email', 'El email es requerido').not().isEmpty(),
    (0, express_validator_1.check)('message', 'El message es obligatorio').not().isEmpty(),
    validarCampos_1.validarCampos
], ContactosController_1.createContacto);
router.put('/:id', [
    (0, express_validator_1.check)('id', 'El id no es valido').isMongoId(),
    (0, express_validator_1.check)('id').custom(Validaciones_db_1.existeContactoById),
    validarCampos_1.validarCampos
], ContactosController_1.updateContacto);
router.delete('/:id', [
    (0, express_validator_1.check)('id', 'El id no es valido').isMongoId(),
    (0, express_validator_1.check)('id').custom(Validaciones_db_1.existeContactoById),
    validarCampos_1.validarCampos
], ContactosController_1.deleteContacto);
exports.default = router;
//# sourceMappingURL=ContactosRoutes.js.map