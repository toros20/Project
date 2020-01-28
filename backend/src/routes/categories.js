import {Router} from 'express';
const router = Router();


import {categoriesbyid} from '../controllers/categoriesController'

router.post('/categoriesbyid/:id',categoriesbyid);


export default router;

