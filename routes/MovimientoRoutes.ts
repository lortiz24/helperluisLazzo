import { Router } from "express";
import {getUsuarios,deleteDuplicados, deleteAllDuplicados} from "../controllers/UsuarioControllers";




const router = Router();

router.get(
    "/obtener_ventas_duplicadas",
    getUsuarios
);

router.post(
    "/delete_duplicados",
    deleteDuplicados
);
router.post(
    "/delete_by_empresa_Jornada",
    deleteAllDuplicados
);





export default router;