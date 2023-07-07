import Router from 'express';
import indexRoutes from './presentation/routes/routes.index'

export const routes = Router();

routes.use(indexRoutes);
