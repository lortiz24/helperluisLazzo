import { Response, Request, NextFunction } from 'express'



export const tieneRole = (...roles: String[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!req.usuario) {
            return res.status(500).json({
                msg: 'Se requiere verificar el role sin validar el token'
            })
        };

        if (!roles.includes(req.usuario.rol)) {
            return res.status(401).json({
                msg: `El servicio requiere uno de estos roles: ${roles}`
            });

        }

        next()
    }
}