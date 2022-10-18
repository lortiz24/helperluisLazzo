
import UsuariosModels from "../models/CierreDiarioModels"





export const existeDetalleByConsecutivo = async(id:string) => {
    const existeMovimiento= await UsuariosModels.findById(id)
    if (!existeMovimiento) {
        throw new Error(`No existe un usuario con id: ${id} `)
    }else{
        return true
    }
}