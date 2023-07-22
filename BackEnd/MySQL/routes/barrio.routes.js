import {Router} from 'express';

import {metodosBarrio as controlBar} from '../controllers/barrio.controllers.js';

const router = Router();

router.get("/all", controlBar.getBarrio);
router.post("/add", controlBar.postBarrio);
router.get("/one/:id", controlBar.oneBarrio);
router.delete("/del/:id", controlBar.deleteBarrio);
router.put("/upd/:id", controlBar.putBarrio);

export default router;