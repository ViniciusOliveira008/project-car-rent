import CarController from "../controllers/CarController.js";
import express from 'express';

const CarRouter = express.Router();

CarRouter.get('/', CarController.getAll);
CarRouter.get('/:id', CarController.getById);
CarRouter.post('/', CarController.create);

export default CarRouter;