(async () => {
    const database = require('./conectandoBanco');
    const Alunos = require('./bancoMap');
    await database.sync();
    //todo: Pesquisando por primary key o registro
    //const usuarios = await Usuarios.findByPk(3); // console.log(usuarios);
    //deletar o registro // await usuarios.destroy(); // deletar por WHERE
    await Alunos.destroy({
        where:{
            codigo_aluno: 4
        }})
    })();