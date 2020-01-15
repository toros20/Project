//importamos el objeto servidor 
import express, { json } from 'express';
//morgan ayuda a recibir en consola las peticiones http
import morgan from 'morgan';

//Import Routes
import projectRoutes from './routes/projects';
import taskRoutes from './routes/task';

//Initialization
const app = express();



//middlewares
app.use(morgan('dev'));
app.use(json()); // para entender archivos json

//routes
app.use('/api/projects',projectRoutes); 
app.use('/api/tasks',taskRoutes); 

export default app;