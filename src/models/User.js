import  Sequelize, { Model }  from "sequelize";

export default class User extends Model {
    static init(sequelize) {
        super.init({
            nome: Sequelize.STRING,
            email: Sequelize.STRING,
            password_hash: Sequelize.STRING,
            password: Sequelize.VIRTUAL,
        },{
            sequelize,
        });
        return this;
    }
}