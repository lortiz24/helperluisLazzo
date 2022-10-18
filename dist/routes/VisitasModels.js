"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ReportesController_1 = require("../controllers/ReportesController");
const router = (0, express_1.Router)();
router.get('/cantidad_donaciones/:proyecto_id', ReportesController_1.getCantidadProyectos);
exports.default = router;
//# sourceMappingURL=VisitasModels.js.map