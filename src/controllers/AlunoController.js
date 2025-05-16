import Aluno from '../models/Aluno';

class AlunoController {
    async index(req, res) {
        const alunos = await Aluno.findAll();
        res.json(alunos)
    }
    async store(req, res){
        try{
            const aluno = Aluno.create(req.body);
            return res.json(aluno);
        }catch(e){
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }

    async update(req, res){
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({
                    errors: ['Id não encontrado'],
                });
            }
            const aluno = await Aluno.findByPk(id);

            if (!aluno) {
                return res.status(400).json({
                    errors: ['Aluno não existe'],
                });
            }
            const alunoAtulizado = aluno.update(req.body)
            return res.json(alunoAtulizado);

        }catch(e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }

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
    async delete(req, res){
        try{
            const {id} = req.params;

            if(!id) {
                return res.status(404).json({
                    errors: ['Id Invalido'],
                });
            }
            
            const aluno = await Aluno.findByPk(id);

            if (!aluno) {
                return res.status(404).json({
                    errors: ['Aluno Não encontrado'],
                });
            }
            await aluno.destroy();
            return res.json('Aluno Excluido com Sucesso!');

        }catch(e){
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }
}

export default new AlunoController();