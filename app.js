import express from 'express'
import * as futRepo from './repositories/futebolRepository.js';
import * as jogosRepo from './repositories/jogosRepository.js';
import * as turmaRepo from './repositories/turmaRepository.js'

const api = express();
api.use(express.json()); // permite o uso de BODY


// TABELA FUTEBOL
api.get('/times', async (req, resp) => {
    let registros = await futRepo.listarTimes();
    resp.send(registros);
});

api.post('/times', async (req, resp) => {
    let novoTime = req.body;

    let id = await futRepo.inserirTime(novoTime);
    resp.send({ novoId: id });
})

api.put('/times/:id', async (req, res) => {
    let dados = req.body;
    let id = req.params.id

    await futRepo.atualizarTime(id, dados);
    res.send();
})


api.delete('/times', async (req, res) => {
    let id = req.query.id

    futRepo.deletarTime(id);
    res.send();
})



// TABELA JOGOS

api.get('/jogos', async (req, res) => {

    let registros = await jogosRepo.listarJogos();

    res.send(registros);

})


api.post('/jogos', async (req, res) => {
    let dados = req.body;

    await jogosRepo.inserirJogo(dados);
    res.send();
})


api.put('/jogos', async (req, res) => {
    let dados = req.body;
    let id = req.query.id;

    await jogosRepo.alterarJogo(id, dados);
    res.send();
})


api.delete('/jogos/:id', async (req, res) => {
    let id = req.params.id

    await jogosRepo.deletarJogo(id);
    res.send();
})


// TABELA TURMAS
api.get('/turma', async (req, res) => {
    let registros = await turmaRepo.listarTurmas();
    res.send(registros);
})


api.post('/turma', async (req, res) => {
    let dados = req.body;
    await turmaRepo.inserirTurma(dados);
    res.send();
})


api.put('/turma', async (req, res) => {
    let dados = req.body;
    let id = req.query.id;

    await turmaRepo.alterarTurma(id, dados);
    res.send();
})


api.delete('/turma/:id', async (req, res) => {
    let id = req.params.id

    await turmaRepo.deletarTurma(id);
    res.send();
})




api.listen(5010, () => console.log('API subiu com sucesso!'));