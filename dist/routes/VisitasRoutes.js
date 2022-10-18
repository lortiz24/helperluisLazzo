"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const VisitasController_1 = require("../controllers/VisitasController");
const router = (0, express_1.Router)();
router.get('/', VisitasController_1.getVisitas);
router.post('/', VisitasController_1.createVisita);
exports.default = router;
//# sourceMappingURL=VisitasRoutes.js.map