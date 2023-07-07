import { Router, Request, Response } from 'express';

const index = Router();

index.get('/', (req: Request, res: Response) => {
  
  res.status(200).jsonp({
    'status': 'success',
    'data': {
      'modules': [
        'calendar',
        'note',
        'reminder',
        'task',
        'time-tracker',
      ],
    }
  })
});

export default index;
