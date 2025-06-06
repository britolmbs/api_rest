import dotenv from 'dotenv';
dotenv.config();
import './database';
import { resolve } from 'path';
import cors from 'cors';
import helmet from 'helmet';

import express from 'express';
import homeRoutes from './routes/home';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import alunoRoutes from './routes/alunoRoutes';
import fotoRoutes from './routes/fotoRoutes';

const whiteList =[
    'http://localhost:3000'
];
const corsOptions = {
    origin: function(origin, callback){
        if(whiteList.indexOf(origin) !== -1 || !origin){
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }

    }
};

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use(cors(corsOptions));
        this.app.use(helmet());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
        this.app.use(express.static(resolve(__dirname, 'uploads')));

    }

    routes(){
 this.app.use('/', homeRoutes);
 this.app.use('/users/', userRoutes);
 this.app.use('/tokens', tokenRoutes);
 this.app.use('/alunos', alunoRoutes);
 this.app.use('/fotos', fotoRoutes);
    }
}

export default new App().app;