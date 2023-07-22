import {Router} from 'express';

import {metodosComuna as controlCom} from '../controllers/comuna.controllers.js';

const router = Router();

router.get("/all", controlCom.getComuna);
router.post("/add", controlCom.postComuna);
router.get("/one/:id", controlCom.oneComuna);
router.delete("/del/:id", controlCom.deleteComuna);
router.put("/upd/:id", controlCom.putComuna);

export default router;