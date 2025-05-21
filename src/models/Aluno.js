import  Sequelize, { Model }  from "sequelize";

export default class Aluno extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                len: {
                    args:[3, 255],
                    msg: 'Nome necessario',
                    },
                },
            },
        
            sobrenome: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 25],
                        msg: 'Sobrenome Necessario.',
                    },
                },
            },
            email: {
                type: Sequelize.STRING,
                defaultValue: '',
                unique: {
                    msg: 'Email já cadastrado',
                },
                validate: {
                    isEmail: {
                        msg: 'e-mail invalido'
                    },
                },
            },
            idade: {
                type: Sequelize.INTEGER,
                defaultValue: '',
                validate: {
                    isInt:{
                        msg: 'Idade Invalida',
                    },
                },

            },
            peso: {
                type:Sequelize.FLOAT,
                defaultValue: '',
                validate: {
                    isFloat: {
                        msg: 'Peso Invalido',
                    },
                },
            },
            altura: {
                type: Sequelize.FLOAT,
                defaultValue: '',
                validate: {
                    isFloat:{ 
                        msg: 'Altura Invalida',
                    },
                },
            },

        }, {
            sequelize,
        });
        return this;
    }
    static associate(models) {
        this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
    }
}