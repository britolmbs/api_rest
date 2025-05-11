import  Sequelize, { Model }  from "sequelize";
import bcrypt from "bcryptjs";

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
               unique: {
                msg: 'email já existe',
            },
               validate: {
                isEmail: {
                    msg: 'Email invalido',
                },

               },
            },
            password_hash: {
                type: Sequelize.STRING,
                defaultValue: '',
            },
            password: {
               type: Sequelize.VIRTUAL,
               defaultValue: '',
               validate: {
                len: {
                    args: [6, 50],
                    msg: 'A senha tem que ter mais que 6 caracter',
                },
               },

            },
        },{
            sequelize,
        });
        this.addHook('beforeSave', async (user) => {
            if(user.password) {
                 user.password_hash = await bcrypt.hash(user.password, 8);
                }
        });
        return this;
    }

    passwordIsValid(password) {
        return bcrypt.compare(password, this.password_hash);
    }
}