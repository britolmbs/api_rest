import { Router } from "express";
import multer from "multer";
import FotoController from "../controllers/FotoController";
import multerConfig from '../config/multer';

const upload = multer(multerConfig);


const router = new Router();

router.post('/', upload.single('arquivo'), FotoController.store);

export default router;