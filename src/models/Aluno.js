import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
    static init(Sequelize) {
        super.init({
            nome: Sequelize.STRING,
            sobrenome: Sequelize.STRING,
            email: Sequelize.STRING,
            idade: Sequelize.INTEGER,
            peso: Sequelize.FLOAT,
            altura: Sequelize.FLOAT,

        }, {
            Sequelize,
        });
        return this;
    }
}