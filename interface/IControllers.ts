const { model } = require('mongoose')

interface IRequestBodyUsuarios {
    nombre: string;
    email: string;
    tipo: string;
    img: string;
    descripcion: string;
    puesto: string;
    other: JSON

}

interface IRequestBodyProyectos {
    descripcion: string;
    title: string;
    fecha_inicio: Date;
    other?: string;
    img?: string;
    monto_meta?: string;
    fecha_objetivo?: Date;
    monto_recaudado: number;
}
interface IRequestBodyDonacion {
    proyecto: string;
    donante: string;
    medio_pago: string;
    monto_donacion: number,
    nombre: string;
    tipo: string

}

interface IRequestBodyContacto {
    name: string;
    email: string;
    message: string;
    asunto: string;
}
interface IRequestBodyObjeto {
    tipo: string;
    objeto: JSON;
    descripcion: string;
}
interface IRequestBodyVisita {
    fecha: string;
    action: JSON
}