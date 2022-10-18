import { Router } from "express";
import {getUsuarios,deleteDuplicados} from "../controllers/UsuarioControllers";




const router = Router();

router.post(
    "/",
    getUsuarios
);

router.post(
    "/delete_duplicados",
    deleteDuplicados
);





export default router;