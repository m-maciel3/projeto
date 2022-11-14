const Sequelize = require('sequelize');
const database = require('./conectandoBanco');
const Alunos = database.define('alunos', {
        codigo_alu:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nome_alu: {
            type: Sequelize.STRING
        },
        email_alu: {
            type: Sequelize.STRING
        },
        login_alu: {
            type: Sequelize.STRING
        },
        senha_alu: {
            type: Sequelize.STRING
        }
})

module.exports = Alunos;