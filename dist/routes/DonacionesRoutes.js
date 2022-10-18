"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const DonacionesController_1 = require("../controllers/DonacionesController");
const Validaciones_db_1 = require("../helpers/Validaciones-db");
const validarCampos_1 = require("../middlewares/validarCampos");
const router = (0, express_1.Router)();
router.get('/', DonacionesController_1.getDonaciones);
router.get('/:id', [
    (0, express_validator_1.check)('id', 'El id no es valido').isMongoId(),
    validarCampos_1.validarCampos
], DonacionesController_1.getDonacion);
router.post("/", [
    (0, express_validator_1.check)('proyecto', 'El proyecto no es valido').isMongoId(),
    // check('donante', 'El donante no es valido').isMongoId(),
    (0, express_validator_1.check)('medio_pago', 'El medio_pago es requerido').not().isEmpty(),
    (0, express_validator_1.check)('monto_donacion', 'El monto_donacion es requerido').not().isEmpty(),
    (0, express_validator_1.check)('tipo', 'El tipo es obligatorio').not().isEmpty(),
    validarCampos_1.validarCampos
], DonacionesController_1.createDonacion);
router.put('/:id', [
    (0, express_validator_1.check)('id', 'El id no es valido').isMongoId(),
    (0, express_validator_1.check)('id').custom(Validaciones_db_1.existeDonacionById),
    validarCampos_1.validarCampos
], DonacionesController_1.updateDonacion);
router.delete('/:id', [
    (0, express_validator_1.check)('id', 'El id no es valido').isMongoId(),
    (0, express_validator_1.check)('id').custom(Validaciones_db_1.existeDonacionById),
    validarCampos_1.validarCampos
], DonacionesController_1.deleteDonacion);
exports.default = router;
//# sourceMappingURL=DonacionesRoutes.js.map