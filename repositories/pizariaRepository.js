import { conection } from "../conection.js";

export async function listarPizzas() {
    const comando = `
        SELECT * FROM sabores;
    `;
    const [registros] = await conection.query(comando);
    return registros;
}

export async function inserirPizza(dados) {
    const comando = `
        INSERT INTO sabores 
            (nm_sabor, bt_meia, nm_tamanho, bt_promocao, dt_pedido, bt_disponivel)
        VALUES (?, ?, ?, ?, ?, ?);
    `;
    const [info] = await conection.query(comando, [
        dados.nm_sabor,
        dados.bt_meia,
        dados.nm_tamanho,
        dados.bt_promocao,
        dados.dt_pedido,
        dados.bt_disponivel,
    ]);
    return info.insertId;
}

export async function alterarPizza(id, dados) {
    const comando = `
        UPDATE sabores
        SET nm_sabor = ?,
            bt_meia = ?,
            nm_tamanho = ?,
            bt_promocao = ?,
            dt_pedido = ?,
            bt_disponivel = ?
        WHERE id_pizza = ?;
    `;
    const [info] = await conection.query(comando, [
        dados.nm_sabor,
        dados.bt_meia,
        dados.nm_tamanho,
        dados.bt_promocao,
        dados.dt_pedido,
        dados.bt_disponivel,
        id,
    ]);
    return info.affectedRows;
}

export async function deletarPizza(id) {
    const comando = `
        DELETE FROM sabores
        WHERE id_pizza = ?;
    `;
    const [info] = await conection.query(comando, [id]);
    return info.affectedRows;
}

export async function buscarPizzaPorId(id) {
    const comando = `
        SELECT * FROM sabores
        WHERE id_pizza = ?;
    `;
    const [info] = await conection.query(comando, [id]);
    return info;
}

export async function filtrarPizzas(filtro) {
    const comando = `
        SELECT * FROM sabores
        WHERE nm_sabor LIKE ?;
    `;
    const [info] = await conection.query(comando, [`%${filtro}%`]);
    return info;
}
