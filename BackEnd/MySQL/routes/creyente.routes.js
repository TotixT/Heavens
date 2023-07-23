import {Router} from 'express';

import {metodosCreyente as controlCre} from '../controllers/creyente.controllers.js';

const router = Router();

router.get("/all", controlCre.getCreyente);
router.post("/add", controlCre.postCreyente);
router.get("/one/:id", controlCre.oneCreyente);
router.delete("/del/:id", controlCre.deleteCreyente);
router.put("/upd/:id", controlCre.putCreyente);

export default router;