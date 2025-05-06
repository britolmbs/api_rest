import Aluno from "../models/Aluno";

class HomeControler {
     async index(req, res) {
        const novoAluno = await Aluno.create({
            nome: 'Lucas',
            sobrenome: 'Brito',
            email: 'lucas@teste.com',
            idade: 29,
            peso: 74,
            altura: 1.7

        });
        res.json(novoAluno);
    }
}

export default new HomeControler();