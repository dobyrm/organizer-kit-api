import { Router, Request, Response } from 'express';

const note = Router();

note.get('/note', (req: Request, res: Response) => {
  
  res.status(200).jsonp({
    'status': 'success',
    'message': 'note',
    'data': null
  })
});

export default note;
