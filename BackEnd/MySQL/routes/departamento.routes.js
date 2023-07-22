import {Router} from 'express';

import {metodosDepartamento as controlDep} from '../controllers/departamento.controllers.js';

const router = Router();

router.get("/all", controlDep.getDepartamentos);
router.post("/add", controlDep.postDepartamentos);
router.get("/one/:id", controlDep.oneDepartamento);
router.delete("/del/:id", controlDep.deleteDepartamento);
router.put("/upd/:id", controlDep.putDepartamento);

export default router;