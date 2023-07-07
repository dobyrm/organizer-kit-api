import { Router, Request, Response } from 'express';

const task = Router();

task.get('/task', (req: Request, res: Response) => {
  
  res.status(200).jsonp({
    'status': 'success',
    'message': 'task',
    'data': null
  })
});

export default task;
