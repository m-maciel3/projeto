(async () => {
    const database = require('./conectandoBanco');
    const Alunos = require('./bancoMap');
    await database.sync();
    //todo: Pesquisando por primary key o registro

    const alunos = await Alunos.findByPk(3)
    console.log(alunos); 
    //todo alterando o registro
    alunos.nome_alu = ''
    await alunos.save(); 
})();