import { Router } from 'express';
import ItemsController from '../controllers';

const usersRouter = Router();

usersRouter.get('/', (req, res) => {
  ItemsController.getItems(req.query.q).then((value) => {
    res.send(value);
  }, (err) => {
    res.status(500).send(err);
  })
});

usersRouter.get('/:id', (req, res) => {
  ItemsController.getDetail(req.params.id).then((value) => {
    res.send(value);
  }, (err) => {
    res.status(500).send(err);
  })
});

export default usersRouter;