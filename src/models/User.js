import  Sequelize, { Model }  from "sequelize";

export default class User extends Model {
    static init(sequelize) {
        super.init({
            nome: { 
               type: Sequelize.STRING,
               defaultValue: '',
               validate: {
                len: {
                    args: [3, 255],
                    msg: 'Campo nome deve ter no minino 3 caracter',
                },
               },
            },
            email: {
               type: Sequelize.STRING,
               defaultValue: '',
               validate: {
                len: {
                    args:[],
                    msg: '',
                },

               },
            },
            password_hash: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args:[],
                        msg: '',
                    },
                },
            },
            password: {
               type: Sequelize.VIRTUAL,
               defaultValue: '',
               validate: {
                len: {
                    args: [],
                    msg: '',
                },
               },

            },
        },{
            sequelize,
        });
        return this;
    }
}