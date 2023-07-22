import { Router } from "express";
import { check } from "express-validator";
import { validateDocuments } from "../middlewares/validate.documents.js";
import Ministerio from "../models/Ministerio.js";
import NivelFormacion from "../models/NivelFormacion.js";
import NivelRuta from "../models/NivelRuta.js";

import { getCreyente, postCreyente, deleteCreyente, oneCreyente, putCreyente } from "../controllers/creyente.controllers.js";

const router = Router();

router.get("/all",getCreyente);

router.post("/add", [
    check('nombre', 'Nombre no es valido').not().isEmpty(),
    check('ministerio').custom(async(ministerio = '')=>{
        const existeMinisterio = await Ministerio.findOne({ministerio});
        if(!existeMinisterio){
            throw new Error(`El Ministerio ${ministerio} no esta registrado en la base de datos`);
        }
    }),
    // check('nivelFormacion', 'No es un Nivel de Formacion valido').isIn(['Liderazgo','Anciano']),
    check('nivelFormacion').custom(async(nivelFormacion = '')=>{
        const existeNivelFormacion = await NivelFormacion.findOne({nivelFormacion});
        if(!existeNivelFormacion){
            throw new Error(`El Nivel de Formación ${nivelFormacion} no esta registrado en la base de datos`);
        }
    }),
    check('edad', 'Edad no es valida').not().isEmpty(),
    // check('nivelRuta', 'No es un Nivel de Ruta valido').isIn(['nuevo','consolidado','enviado']),
    check('nivelRuta').custom(async(nivelRuta = '')=>{
        const existeNivelRuta = await NivelRuta.findOne({nivelRuta});
        if(!existeNivelRuta){
            throw new Error(`El Nivel de Ruta ${nivelRuta} no esta registrado en la base de datos`);
        }
    }),
    validateDocuments
], postCreyente);

router.get("/one/:id",oneCreyente);

router.delete("/del/:id",deleteCreyente);

router.put("/upd/:id", [
    check('nombre', 'Nombre no es valido').not().isEmpty(),
    check('ministerio').custom(async(ministerio = '')=>{
        const existeMinisterio = await Ministerio.findOne({ministerio});
        if(!existeMinisterio){
            throw new Error(`El Ministerio ${ministerio} no esta registrado en la base de datos`);
        }
    }),
    // check('nivelFormacion', 'No es un Nivel de Formacion valido').isIn(['Liderazgo','Anciano']),
    check('nivelFormacion').custom(async(nivelFormacion = '')=>{
        const existeNivelFormacion = await NivelFormacion.findOne({nivelFormacion});
        if(!existeNivelFormacion){
            throw new Error(`El Nivel de Formación ${nivelFormacion} no esta registrado en la base de datos`);
        }
    }),
    check('edad', 'Edad no es valida').not().isEmpty(),
    // check('nivelRuta', 'No es un Nivel de Ruta valido').isIn(['nuevo','consolidado','enviado']),
    check('nivelRuta').custom(async(nivelRuta = '')=>{
        const existeNivelRuta = await NivelRuta.findOne({nivelRuta});
        if(!existeNivelRuta){
            throw new Error(`El Nivel de Ruta ${nivelRuta} no esta registrado en la base de datos`);
        }
    }),
    validateDocuments
], putCreyente);

export default router;