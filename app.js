import express from 'express'
import * as futRepo from './repositories/futebolRepository.js';
import * as jogosRepo from './repositories/jogosRepository.js';
import * as turmaRepo from './repositories/turmaRepository.js'
import * as pizzaRepo from './repositories/pizzariaRepository.js'
import * as musicRepo from './repositories/musicRepository.js'
import * as medicamentoRepo from './repositories/remediosRepository.js'
import * as livroRepo from './repositories/livroRepository.js'
import * as carroRepo from './repositories/carrosRepository.js'
import * as carros2Repo from './repositories/carros2Repository.js'
import * as produtoRepo from './repositories/produtoRepository.js'

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

api.get('/turma/:id', async (req, res) => {
    let id = req.params.id;

    let registro = await turmaRepo.listaTurmaEspecifica(id);
    res.send(registro)
})


api.get('/turma/:filtro', async (req, res) => {
    let filtro = req.params.filtro;

    let registro = await turmaRepo.FiltrarTurmas(filtro);
    res.send(registro)

})


// TABELA PIZZARIA
api.get('/pizza', async (req, res) => {
    let registros = await pizzaRepo.listarPizzas();
    res.send(registros);
})

api.get('/pizza/id/:id', async (req, res) => {
    let id = req.params.id;
    let registro = await pizzaRepo.buscarPizzaPorId(id);
    res.send(registro);
})

api.get('/pizza/filtro/:filtro', async (req, res) => {
    let filtro = req.params.filtro;
    let registros = await pizzaRepo.filtrarPizzas(filtro);
    res.send(registros);
})

api.post('/pizza', async (req, res) => {
    let dados = req.body;
    let id = await pizzaRepo.inserirPizza(dados);
    res.send({ novoId: id });
})

api.put('/pizza', async (req, res) => {
    let dados = req.body;
    let id = req.query.id;

    await pizzaRepo.alterarPizza(id, dados);
    res.send();
})

api.delete('/pizza/:id', async (req, res) => {
    let id = req.params.id;
    await pizzaRepo.deletarPizza(id);
    res.send();
})

// TABELA MUSICAS

api.get('/musica', async (req, res) => {
    let registros = await musicRepo.listarMusicas();
    res.send(registros);
})

api.get('/musica/id/:id', async (req, res) => {
    let id = req.params.id;
    let registro = await musicRepo.buscarMusicaPorId(id);
    res.send(registro);
})

api.get('/musica/filtro/:filtro', async (req, res) => {
    let filtro = req.params.filtro;
    let registros = await musicRepo.filtrarMusicas(filtro);
    res.send(registros);
})

api.post('/musica', async (req, res) => {
    let dados = req.body;
    let id = await musicRepo.inserirMusica(dados);
    res.send({ novoId: id });
})

api.put('/musica', async (req, res) => {
    let dados = req.body;
    let id = req.query.id;

    await musicRepo.alterarMusica(id, dados);
    res.send();
})

api.delete('/musica/:id', async (req, res) => {
    let id = req.params.id;
    await musicRepo.deletarMusica(id);
    res.send();
})


//TABELA REMEDIOS 


api.get('/medicamento', async (req, res) => {
    let registros = await medicamentoRepo.listarMedicamentos();
    res.send(registros);
})

api.get('/medicamento/id/:id', async (req, res) => {
    let id = req.params.id;
    let registro = await medicamentoRepo.buscarMedicamentoPorId(id);
    res.send(registro);
})

api.get('/medicamento/filtro/:filtro', async (req, res) => {
    let filtro = req.params.filtro;
    let registros = await medicamentoRepo.filtrarMedicamentos(filtro);
    res.send(registros);
})

api.post('/medicamento', async (req, res) => {
    let dados = req.body;
    let id = await medicamentoRepo.inserirMedicamento(dados);
    res.send({ novoId: id });
})

api.put('/medicamento', async (req, res) => {
    let dados = req.body;
    let id = req.query.id;

    await medicamentoRepo.alterarMedicamento(id, dados);
    res.send();
})

api.delete('/medicamento/:id', async (req, res) => {
    let id = req.params.id;
    await medicamentoRepo.deletarMedicamento(id);
    res.send();
})



//TABELA LIVROS



api.get('/livro', async (req, res) => {
    let registros = await livroRepo.listarLivros();
    res.send(registros);
})

api.get('/livro/id/:id', async (req, res) => {
    let id = req.params.id;
    let registro = await livroRepo.buscarLivroPorId(id);
    res.send(registro);
})

api.get('/livro/filtro/:filtro', async (req, res) => {
    let filtro = req.params.filtro;
    let registros = await livroRepo.filtrarLivros(filtro);
    res.send(registros);
})

api.post('/livro', async (req, res) => {
    let dados = req.body;
    let id = await livroRepo.inserirLivro(dados);
    res.send({ novoId: id });
})

api.put('/livro', async (req, res) => {
    let dados = req.body;
    let id = req.query.id;

    await livroRepo.alterarLivro(id, dados);
    res.send();
})

api.delete('/livro/:id', async (req, res) => {
    let id = req.params.id;
    await livroRepo.deletarLivro(id);
    res.send();
})


//TABELA CARROS


api.get('/carro', async (req, res) => {
    let registros = await carroRepo.listarCarros();
    res.send(registros);
})

api.get('/carro/id/:id', async (req, res) => {
    let id = req.params.id;
    let registro = await carroRepo.buscarCarroPorId(id);
    res.send(registro);
})

api.get('/carro/filtro/:filtro', async (req, res) => {
    let filtro = req.params.filtro;
    let registros = await carroRepo.filtrarCarros(filtro);
    res.send(registros);
})

api.post('/carro', async (req, res) => {
    let dados = req.body;
    let id = await carroRepo.inserirCarro(dados);
    res.send({ novoId: id });
})

api.put('/carro', async (req, res) => {
    let dados = req.body;
    let id = req.query.id;

    await carroRepo.alterarCarro(id, dados);
    res.send();
})

api.delete('/carro/:id', async (req, res) => {
    let id = req.params.id;
    await carroRepo.deletarCarro(id);
    res.send();
})


//CARROS 2


api.get('/carros2', async (req, res) => {
    let registros = await carros2Repo.listarCarros2();
    res.send(registros);
})

api.get('/carros2/id/:id', async (req, res) => {
    let id = req.params.id;
    let registro = await carros2Repo.buscarCarro2PorId(id);
    res.send(registro);
})

api.get('/carros2/filtro/:filtro', async (req, res) => {
    let filtro = req.params.filtro;
    let registros = await carros2Repo.filtrarCarros2(filtro);
    res.send(registros);
})

api.post('/carros2', async (req, res) => {
    let dados = req.body;
    let id = await carros2Repo.inserirCarro2(dados);
    res.send({ novoId: id });
})

api.put('/carros2', async (req, res) => {
    let dados = req.body;
    let id = req.query.id;

    await carros2Repo.alterarCarro2(id, dados);
    res.send();
})

api.delete('/carros2/:id', async (req, res) => {
    let id = req.params.id;
    await carros2Repo.deletarCarro2(id);
    res.send();
})





//TABELA PRODUTOS

api.get('/produtos', async (req, res) => {
    let registros = await produtoRepo.listarProdutos();
    res.send(registros);
})

api.get('/produtos/id/:id', async (req, res) => {
    let id = req.params.id;
    let registro = await produtoRepo.buscarProdutoPorId(id);
    res.send(registro);
})

api.get('/produtos/filtro/:filtro', async (req, res) => {
    let filtro = req.params.filtro;
    let registros = await produtoRepo.filtrarProdutos(filtro);
    res.send(registros);
})

api.post('/produtos', async (req, res) => {
    let dados = req.body;
    let id = await produtoRepo.inserirProduto(dados);
    res.send({ novoId: id });
})

api.put('/produtos', async (req, res) => {
    let dados = req.body;
    let id = req.query.id;

    await produtoRepo.alterarProduto(id, dados);
    res.send();
})

api.delete('/produtos/:id', async (req, res) => {
    let id = req.params.id;
    await produtoRepo.deletarProduto(id);
    res.send();
})


api.listen(5010, () => console.log('API subiu com sucesso!'));


