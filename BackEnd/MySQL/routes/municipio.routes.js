import {Router} from 'express';

import {metodosMunicipio as controlMun} from '../controllers/municipio.controllers.js';

const router = Router();

router.get("/all", controlMun.getMunicipio);
router.post("/add", controlMun.postMunicipio);
router.get("/one/:id", controlMun.oneMunicipio);
router.delete("/del/:id", controlMun.deleteMunicipio);
router.put("/upd/:id", controlMun.putMunicipio);

export default router;