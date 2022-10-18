"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsuarioControllers_1 = require("../controllers/UsuarioControllers");
const router = (0, express_1.Router)();
router.post("/", UsuarioControllers_1.getUsuarios);
router.post("/delete_duplicados", UsuarioControllers_1.deleteDuplicados);
exports.default = router;
//# sourceMappingURL=MovimientoRoutes.js.map