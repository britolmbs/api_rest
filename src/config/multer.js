import multer from "multer";
import { extname, resolve } from 'path';


 const aleatorio = () => Math.floor(Math.random() * 1000 + 1000);
export default {
    fileFilter: (req, file, cb) => {
        if(file.mimetype != 'image/png' && file.mimetype != 'image/jpeg') {
            return cb(new multer.MulterError('Arquivo precisa ser de imagem'));
        }
        return cb(null, true);
    },
    stoage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, resolve(__dirname, '..', '..', 'uploads'));
        },
        filename: (req, file, cb) => {
            cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
        },
    }),
}