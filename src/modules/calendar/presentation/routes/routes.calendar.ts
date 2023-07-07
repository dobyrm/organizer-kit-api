import { Router, Request, Response } from 'express';

const calendar = Router();

calendar.get('/calendar', (req: Request, res: Response) => {
  
  res.status(200).jsonp({
    'status': 'success',
    'message': 'calendar',
    'data': null
  })
});

export default calendar;
