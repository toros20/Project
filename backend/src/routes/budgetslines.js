import {Router} from 'express';
const router = Router();

import {createBudgetLines,budgetLinesbyProjectId} from '../controllers/budgetLinesController'

// ruta /api/budgetlines/project/:id -> para buscar los renglones de cada projecto
router.post('/project/:id',budgetLinesbyProjectId);
// ruta /api/budgetlines/ -> para crear un nuevo renglon
router.post('/',createBudgetLines);


//router.get('/', listBudgets);
//router.get('/:id', findProject);
//router.delete('/:id', deleteProject);
//router.put('/:id', updateProject);

export default router;