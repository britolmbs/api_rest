"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Aluno extends _sequelize.Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: _sequelize2.default.STRING,
                defaultValue: '',
                validate: {
                len: {
                    args:[3, 255],
                    msg: 'Nome necessario',
                    },
                },
            },
        
            sobrenome: {
                type: _sequelize2.default.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 25],
                        msg: 'Sobrenome Necessario.',
                    },
                },
            },
            email: {
                type: _sequelize2.default.STRING,
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
                type: _sequelize2.default.INTEGER,
                defaultValue: '',
                validate: {
                    isInt:{
                        msg: 'Idade Invalida',
                    },
                },

            },
            peso: {
                type:_sequelize2.default.FLOAT,
                defaultValue: '',
                validate: {
                    isFloat: {
                        msg: 'Peso Invalido',
                    },
                },
            },
            altura: {
                type: _sequelize2.default.FLOAT,
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
} exports.default = Aluno;