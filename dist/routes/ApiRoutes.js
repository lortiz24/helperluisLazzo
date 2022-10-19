"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.json({
        delete_duplicado: "/api/movimientos/delete_duplicados"
    });
});
exports.default = router;
//# sourceMappingURL=ApiRoutes.js.map