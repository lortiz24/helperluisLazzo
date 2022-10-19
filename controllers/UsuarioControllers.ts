import { Response, Request } from 'express'
import { mongo } from 'mongoose';
import DetalladoCierreDiario from '../models/CierreDiarioModels';


export const deleteDuplicadosHelper = async (req: any, borradas: any[]) => {
    const { empresas_id, consecutivo_combustible } = req
    try {
        console.log(empresas_id)
        const detalladoCierre = await DetalladoCierreDiario.aggregate()
            .match({ empresas_id: empresas_id, "data.ventas_combustible.consecutivo": consecutivo_combustible })
        // res.send(detalladoCierre)



        if (detalladoCierre.length > 1) {
            let duplocadasABorrar: any[] = [];
            detalladoCierre.map((detalladoItem: any, index: number) => {

                if (index === 0) return
                duplocadasABorrar.push(DetalladoCierreDiario.findByIdAndDelete(detalladoItem._id))
                borradas.push(detalladoItem)
            })

            const backup = await Promise.all(duplocadasABorrar);
            return {
                consecutivo_combustible,
                backup
            }
        }

        return { consecutivo_combustible, backup: [] }
    } catch (error: any) {
        return { consecutivo_combustible, error: error.message }
    }

}
export const getUsuarios = async (req: Request, res: Response) => {
    try {
        const { empresas_id } = req.body

        const detalladoCierre = await DetalladoCierreDiario.find({ empresas_id: empresas_id/* , jornada_id: jornada_id */ })


        let actualizaciones: any[] = [];
        detalladoCierre.map((detalladoItem: any) => {
            let hashCombustibles: any = {};
            let hashCanastilla: any = {};
            let hashKisco: any = {};

            const ventas_combustible_unicas = detalladoItem.data.ventas_combustible?.filter((ventaCombustible: any) => hashCombustibles[ventaCombustible.venta] ? false : hashCombustibles[ventaCombustible.venta] = true) ?? []
            const ventas_canastilla_unicas = detalladoItem.data.ventas_canastilla?.filter((ventaCanastilla: any) => hashCanastilla[ventaCanastilla.venta] ? false : hashCanastilla[ventaCanastilla.venta] = true) ?? []
            const ventas_kiosco_unicas = detalladoItem.data.ventas_kiosco?.filter((ventaKiosco: any) => hashKisco[ventaKiosco.venta] ? false : hashKisco[ventaKiosco.venta] = true) ?? []


            if (!!detalladoItem.data.ventas_combustible /* && ventas_combustible_unicas?.length !== detalladoItem.data.ventas_combustible?.length */) detalladoItem.data.ventas_combustible = ventas_combustible_unicas


            if (!!detalladoItem.data.ventas_canastilla /* && ventas_canastilla_unicas?.length !== detalladoItem.data.ventas_canastilla?.length */) detalladoItem.data.ventas_canastilla = ventas_canastilla_unicas


            if (!!detalladoItem.data.ventas_kiosco /* && ventas_kiosco_unicas?.length !== detalladoItem.data.ventas_kiosco?.length */) detalladoItem.data.ventas_kiosco = ventas_kiosco_unicas

            actualizaciones.push(DetalladoCierreDiario.findByIdAndUpdate(detalladoItem._id, { data: detalladoItem.data }))

        })

        const backup = await Promise.all(actualizaciones);

        res.send({
            backup,
            cierres_modificados: detalladoCierre
        })
    } catch (error: any) {
        res.json({ error: error.message });
    }

}
export const deleteDuplicados = async (req: Request, res: Response) => {
    try {
        const { empresas_id, consecutivo_combustible } = req.body
        console.log(empresas_id)
        const detalladoCierre = await DetalladoCierreDiario.aggregate()
            .match({ empresas_id: empresas_id, "data.ventas_combustible.consecutivo": consecutivo_combustible })
        // res.send(detalladoCierre)



        if (detalladoCierre.length > 1) {
            let duplocadasABorrar: any[] = [];
            detalladoCierre.map((detalladoItem: any, index: number) => {

                if (index === 0) return
                duplocadasABorrar.push(DetalladoCierreDiario.findByIdAndDelete(detalladoItem._id))

            })

            const backup = await Promise.all(duplocadasABorrar);
            return res.send({
                backup
            })
        }

        res.send({
            msg: "No hay registros duplicados con ese consecutivo"
        })
    } catch (error: any) {
        res.json({ error: error.message });
    }

}
export const deleteAllDuplicados = async (req: Request, res: Response) => {
    try {
        const { empresas_id } = req.body
        let array_a_borrar: any[] = []
        let borradas: any[] = []
        console.log(empresas_id)
        const detalladoCierre = await DetalladoCierreDiario.aggregate()
            .match({ empresas_id: empresas_id })
        // res.send(detalladoCierre)
        console.log(detalladoCierre)
        detalladoCierre.map((detalladoItem: any, index: number) => {


            detalladoItem.data.ventas_combustible.map((item: any, index: number) => {
                array_a_borrar.push(deleteDuplicadosHelper({ empresas_id, consecutivo_combustible: item.consecutivo }, borradas))
            })

        })
        const backup = await Promise.all(array_a_borrar);

        res.json({ borradas })
    } catch (error: any) {
        res.json({ error: error.message });
    }

}

