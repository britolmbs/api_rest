import multer from "multer";
import multerConfig from "../config/multer";
import Foto from "../models/Foto";

const upload = multer(multerConfig).single('foto'); 

class FotoController {
     store(req, res) {
       return upload(req, res, async (err) =>{
        if(err) {
            return res.status(400).json({
                errors: [err.code],
        });
        }
        try{
            const { originalname, filename } = req.file;
            const { aluno_id } = req.body;
            const foto = await Foto.create({originalname, filename});
           return res.json(req.file);
        }catch(e){
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
       });
    }
}

export default new FotoController();