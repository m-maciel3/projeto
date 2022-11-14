const Sequelize = require('sequelize')
const sequelize = new Sequelize('projeto', 'root','Maria.maciel0308', {
    host:'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha na conexão:"+erro)
})