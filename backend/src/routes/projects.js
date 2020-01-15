import {Router} from 'express';
const router = Router();

import {createProjects } from '../controllers/projectsController';
// rutas /api/projets
router.get('/', createProjects);


export default router;
