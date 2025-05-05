module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('alunos', { 
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },

        });
    },

    down: (queryInterface) => {
        return queryInterface.dropTable('alunos');
    }
};