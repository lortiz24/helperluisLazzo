"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ReportesController_1 = require("../controllers/ReportesController");
const router = (0, express_1.Router)();
router.get('/cantidad_donaciones/:proyecto_id', ReportesController_1.getCantidadProyectos);
router.get('/metricas/:proyecto_id', ReportesController_1.getMetricasProyectos);
exports.default = router;
//# sourceMappingURL=ReportesRoutes.js.map