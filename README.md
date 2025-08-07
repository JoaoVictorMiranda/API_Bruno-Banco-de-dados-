# INSTRUÇÕES DA ATIVIDADE!!!!!!!


Chegou a hora de transformar aquele monte de tabelas criadas nos bimestres anteriores em uma aplicação de verdade. Essa é a virada de chave entre “estou estudando” e “estou construindo”.


🎯 OBJETIVO
Você vai escolher 10 tabelas que criou no 1º e 2º bimestre e construir uma API com Node.js + Express + Mysql2, contendo dois endpoints para cada tabela:

    GET /tabela → para listar os registros
    POST /tabela → para inserir um novo registro







📂 ESTRUTURA ESPERADA DO PROJETO
pasta-projeto/
├── app.js                           ✅ ponto de entrada da aplicação
├── conection.js                ✅ configuração única da conexão com o banco
├── alunoRepository.js     ✅ lógica SQL da tabela aluno
├── cursoRepository.js     ✅ lógica SQL da tabela curso
├── ...                                  ✅ demais repositories (um por tabela)

⚠️ Atenção: não é para criar um app por tabela nem várias conexões. Apenas um app.js e um conection.js para o projeto todo.




📚 EXEMPLO PRÁTICO – TABELA: CURSO

🔹 GET /aluno | Retorna todos os alunos cadastrados.
Exemplo no Thunder Client (ou Postman):
GET http://localhost:5010/aluno

🔹 POST /aluno | Insere um novo aluno.
Exemplo no Thunder Client:
POST http://localhost:5010/aluno
body:
{
  "nome": "João Silva",
  "idade": 18,
  "curso_id": 2
}



📥 ENTREGA
Suba o projeto em um repositório no GitHub e poste o link aqui no Classroom. Capriche na organização do código e nos testes com Thunder Client.

Se ficou com dúvida, revise os exemplos de aula, e mais importante: se vira!! 
É assim que os bons profissionais de TI crescem — fazendo, testando, errando, e ajustando.


Boa sorte, hihi
#borapracima 
#sanguenosoio 
🔥