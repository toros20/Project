require('dotenv').config();
//importamos el objeto servidor 
import express, { json } from 'express';
//morgan ayuda a recibir en consola las peticiones http
import morgan from 'morgan';

//importamos el middleare core para el enlace entre servidores
import cors from 'cors';

//Import Routes
import projectRoutes from './routes/projects';
import taskRoutes from './routes/task';

//Initialization
const app = express();

//settings
app.set('port',process.env.PORT || 5000);

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(json()); // para entender archivos json

//routes
app.use('/api/projects',projectRoutes); 
app.use('/api/tasks',taskRoutes); 

export default app;