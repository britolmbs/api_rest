import Aluno from '../models/Aluno';

class AlunoController {
    async index(req, res) {
        const alunos = await Aluno.findAll();
        res.json(alunos)
    }
    async store(req, res){}

    async update(req, res){}

    async show(req, res){
      try { 
        const {id} = req.params;

        if(!id) {
            return res.status(404).json({
                errors: ['Faltando ID'],
            });
        }
        const aluno = await Aluno.findByPk(id);
            if(!aluno) {
                return res.status(404).json({
                    errors: ['Aluno não existe']
                });
            }
            return res.json(aluno);
     }catch (e){
        return res.status(400).json({
            errors: e.errors.map((err) => err.message),
        });

     }
    }
    async delete(req, res){}
}

export default new AlunoController();