import { Router, Request, Response } from 'express';

const reminder = Router();

reminder.get('/reminder', (req: Request, res: Response) => {
  
  res.status(200).jsonp({
    'status': 'success',
    'message': 'reminder',
    'data': null
  })
});

export default reminder;
