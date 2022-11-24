(async () => {
    const database = require('./conectandoBanco');
    const Alunos = require('./bancoMap');
    await database.sync();
    //todo: Pesquisando por primary key o registro
    //const usuarios = await Usuarios.findByPk(3);

    const alunos = await Alunos.findByPk(3)
    console.log(alunos); 
    
})();