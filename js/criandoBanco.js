(async () => {
    const database = require('./conectandoBanco');
    const Alunos = require('./bancoMap');

    await database.sync(); //cria a tabela alunos
    const novoAluno = await Alunos.create({
        nome_alu: "Aluno 1",
        email_alu: "Aluno1@gmail.com",
        login_alu: "Aluno.1",
        senha_alu: "aluno1"
    })
console.log(novoAluno);

})();
