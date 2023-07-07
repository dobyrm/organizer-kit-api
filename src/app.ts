import express, { Express } from 'express';
import { routes } from './shared/routes';
import { moduleRouters } from './modules/module.routes';

const app: Express = express();

app.use(routes);
app.use(moduleRouters);

export default app;
