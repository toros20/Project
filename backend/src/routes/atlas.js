import {Router} from 'express';
const router = Router();


import {atlas_resultados,atlas_productos} from '../controllers/atlasController'

router.get('/resultados',atlas_resultados);// obtener los RESULTADOS ATLAS son de codigo 0
router.get('/productos/:id',atlas_productos);// para obtener todas los producots hijos dado el codigo atlas del resultado

export default router;