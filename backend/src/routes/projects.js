import {Router} from 'express';
const router = Router();

import {createProjects,listProjects,findProject,deleteProject,updateProject } from '../controllers/projectsController';
// rutas /api/projets
router.post('/', createProjects);
router.get('/', listProjects);
router.get('/:id', findProject);
router.delete('/:id', deleteProject);
router.put('/:id', updateProject);

export default router;
