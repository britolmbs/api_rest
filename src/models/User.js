import  Sequelize, { Model }  from "sequelize";

export default class User extends Model {
    static init(sequelize) {
        super.init({
            
        },{
            sequelize,
        });
        return this;
    }
}