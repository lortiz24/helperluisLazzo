import express, { Application } from 'express';
import cors from 'cors'

import { dbConnection } from '../db/config';

import movimientoRoutes from '../routes/MovimientoRoutes';
import apiRoutes from '../routes/ApiRoutes';


class Server {
    private app: Application
    private port: string
    private movimientosRoute: string
    private api: string
    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000'
        //Inicializando rutas

        this.movimientosRoute = '/api/movimientos'
        this.api = '/'
        //conection to DB
        this.dbConnection()
        //Middlewares
        this.middlewares()
        //routes
        this.routes()

    }

    routes() {
        this.app.use(this.movimientosRoute, movimientoRoutes)
        this.app.use(this.api, apiRoutes)
    }

    middlewares() {
        this.app.use(express.json())
        this.app.use(cors())
        this.app.set('trust proxy', true);
    }

    async dbConnection() {
        await dbConnection();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server on port ' + this.port);
        })
    }
}

export default Server