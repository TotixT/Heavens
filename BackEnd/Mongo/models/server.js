import express from 'express';
import cors from 'cors';

import creyentesRoutes from '../routes/creyente.routes.js';

import conectarDB from '../config/config.js';

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORTMONGO;

        this.creyentesPath = "/api/creyentes";

        this.conectar();
        this.middlewares();
        this.routes();
    }

    async conectar(){
        await conectarDB();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.creyentesPath, creyentesRoutes);
    }

    listenings(){
        this.app.listen(this.port, ()=>{
            console.log(`MONGODB SERVER IS RUNNING ON PORT ${this.port}`);
        })
    }

}

export default Server;