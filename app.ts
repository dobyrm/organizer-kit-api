import express, { Express } from 'express';
import dotenv from 'dotenv';

const app: Express = express();

dotenv.config();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
