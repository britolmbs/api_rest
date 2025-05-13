'use strict';
const bcryptjs = require('bcryptjs');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('users', [{
       nome: 'Nicolas',
       email: 'nicolas.s@teste.com.br',
       password_hash: await bcryptjs.hash('123472', 8),
       created_at: new Date(),
       updated_at: new Date(),
       
      },
    {
      nome:'Olivia',
      email: 'olivia.g@teste.com.br',
      password_hash: await bcryptjs.hash('123473', 8),
      created_at: new Date(),
      updated_at:new Date(),
    },
  {
    nome: 'Paulo',
    email: 'paulo.h@teste.com.br',
    password_hash: await bcryptjs.hash('123474', 8),
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    nome: 'Quiteria',
    email: 'quiteria.j@teste.com.br',
    password_hash: await bcryptjs.hash('123475', 8),
    created_at: new Date(),
    updated_at: new Date(),
  }], {});
    
  },

  async down () {
  
  }
};
