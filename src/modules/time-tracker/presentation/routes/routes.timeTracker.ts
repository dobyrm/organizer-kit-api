import { Router, Request, Response } from 'express';

const timeTracker = Router();

timeTracker.get('/calendar', (req: Request, res: Response) => {
  
  res.status(200).jsonp({
    'status': 'success',
    'message': 'time-tracker',
    'data': null
  })
});

export default timeTracker;
