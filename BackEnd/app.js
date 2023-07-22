//Mysql

import {app, listening} from './MySQL/app.js';

listening(app);

//Mongo

import dotenv from 'dotenv';

import Server from './Mongo/models/server.js';

dotenv.config();

const server = new Server();

server.listenings();
