import { Router } from "express";




const router = Router();

router.get('/', (req, res) => {
    res.json({
        delete_duplicado: "/api/movimientos/delete_duplicados"

    })
});

export default router;