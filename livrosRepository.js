import { conection } from "../conection.js";

export async function listarLivros() {
    const comando = `SELECT * FROM livros;`;
    const [registros] = await conection.query(comando);
    return registros;
}

export async function inserirLivro(dados) {
    const comando = `
        INSERT INTO livros 
            (titulo, autor, ano_publicacao, genero, editora, preco)
        VALUES (?, ?, ?, ?, ?, ?);
    `;
    const [info] = await conection.query(comando, [
        dados.titulo,
        dados.autor,
        dados.ano_publicacao,
        dados.genero,
        dados.editora,
        dados.preco,
    ]);
    return info.insertId;
}

export async function alterarLivro(id, dados) {
    const comando = `
        UPDATE livros
        SET titulo = ?,
            autor = ?,
            ano_publicacao = ?,
            genero = ?,
            editora = ?,
            preco = ?
        WHERE id = ?;
    `;
    const [info] = await conection.query(comando, [
        dados.titulo,
        dados.autor,
        dados.ano_publicacao,
        dados.genero,
        dados.editora,
        dados.preco,
        id,
    ]);
    return info.affectedRows;
}

export async function deletarLivro(id) {
    const comando = `DELETE FROM livros WHERE id = ?;`;
    const [info] = await conection.query(comando, [id]);
    return info.affectedRows;
}

export async function buscarLivroPorId(id) {
    const comando = `SELECT * FROM livros WHERE id = ?;`;
    const [info] = await conection.query(comando, [id]);
    return info;
}

export async function filtrarLivros(filtro) {
    const comando = `
        SELECT * FROM livros
        WHERE titulo LIKE ?;
    `;
    const [info] = await conection.query(comando, [`%${filtro}%`]);
    return info;
}
