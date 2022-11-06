import express from 'express';

import UserController from '../controllers/userController';

const userRouter = express.Router();

const userController = new UserController();

userRouter.post('/users', userController.create);

userRouter.post('/login', userController.login);

export default userRouter;