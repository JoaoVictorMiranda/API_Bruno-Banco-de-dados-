import { conection } from "../conection.js";

export async function listarProdutos() {
    const comando = `SELECT * FROM produtos;`;
    const [registros] = await conection.query(comando);
    return registros;
}

export async function inserirProduto(dados) {
    const comando = `
        INSERT INTO produtos 
            (nome, descricao, preco, quantidade, categoria, fornecedor, em_estoque)
        VALUES (?, ?, ?, ?, ?, ?, ?);
    `;
    const [info] = await conection.query(comando, [
        dados.nome,
        dados.descricao,
        dados.preco,
        dados.quantidade,
        dados.categoria,
        dados.fornecedor,
        dados.em_estoque,
    ]);
    return info.insertId;
}

export async function alterarProduto(id, dados) {
    const comando = `
        UPDATE produtos
        SET nome = ?,
            descricao = ?,
            preco = ?,
            quantidade = ?,
            categoria = ?,
            fornecedor = ?,
            em_estoque = ?
        WHERE id = ?;
    `;
    const [info] = await conection.query(comando, [
        dados.nome,
        dados.descricao,
        dados.preco,
        dados.quantidade,
        dados.categoria,
        dados.fornecedor,
        dados.em_estoque,
        id,
    ]);
    return info.affectedRows;
}

export async function deletarProduto(id) {
    const comando = `DELETE FROM produtos WHERE id = ?;`;
    const [info] = await conection.query(comando, [id]);
    return info.affectedRows;
}

export async function buscarProdutoPorId(id) {
    const comando = `SELECT * FROM produtos WHERE id = ?;`;
    const [info] = await conection.query(comando, [id]);
    return info;
}

export async function filtrarProdutos(filtro) {
    const comando = `
        SELECT * FROM produtos
        WHERE nome LIKE ? OR descricao LIKE ? OR categoria LIKE ? OR fornecedor LIKE ?;
    `;
    const [info] = await conection.query(comando, [
        `%${filtro}%`,
        `%${filtro}%`,
        `%${filtro}%`,
        `%${filtro}%`
    ]);
    return info;
}
