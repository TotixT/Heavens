import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import departamentoRouter from './routes/departamento.routes.js';
import municipioRouter from './routes/municipio.routes.js'
import comunaRouter from './routes/comuna.routes.js';
import barrioRoutes from './routes/barrio.routes.js';
// import creyenteRoutes from './routes/creyente.routes.js';

dotenv.config();
const app = express();

const corsOption={
  methods: ["GET", "POST", "PUT", "DELETE"]
}
const port = process.env.PORTSQL;

app.use(express.json());
app.use(cors(corsOption));

app.use("/api/departamento",departamentoRouter);
app.use("/api/municipio",municipioRouter);
app.use("/api/comuna",comunaRouter);
app.use("/api/barrio",barrioRoutes);
// app.use("/api/creyente",creyenteRoutes);

function listening(app){
  app.listen(port, ()=>{
    console.log(`SERVIDOR DE MYSQL ESTA CORRIENDO EN ${port}`);
  });
}

export {
  listening,
  app
};
