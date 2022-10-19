import { Router } from "express";
import {getUsuarios,deleteDuplicados, deleteAllDuplicados} from "../controllers/UsuarioControllers";




const router = Router();

router.post(
    "/",
    getUsuarios
);

router.post(
    "/delete_duplicados",
    deleteDuplicados
);
router.post(
    "/delete_All_duplicados",
    deleteAllDuplicados
);





export default router;