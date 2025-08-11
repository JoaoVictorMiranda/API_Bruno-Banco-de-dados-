import { conection } from "../conection.js";

export async function listarMedicamentos() {
    const comando = `
        SELECT * FROM medicamentos;
    `;
    const [registros] = await conection.query(comando);
    return registros;
}

export async function inserirMedicamento(dados) {
    const comando = `
        INSERT INTO medicamentos 
            (nm_remedio, nm_fabrica, bt_manipulado, bt_receita, pr_preco, bt_disponivel, vl_lote)
        VALUES (?, ?, ?, ?, ?, ?, ?);
    `;
    const [info] = await conection.query(comando, [
        dados.nm_remedio,
        dados.nm_fabrica,
        dados.bt_manipulado,
        dados.bt_receita,
        dados.pr_preco,
        dados.bt_disponivel,
        dados.vl_lote,
    ]);
    return info.insertId;
}

export async function alterarMedicamento(id, dados) {
    const comando = `
        UPDATE medicamentos
        SET nm_remedio = ?,
            nm_fabrica = ?,
            bt_manipulado = ?,
            bt_receita = ?,
            pr_preco = ?,
            bt_disponivel = ?,
            vl_lote = ?
        WHERE id_produto = ?;
    `;
    const [info] = await conection.query(comando, [
        dados.nm_remedio,
        dados.nm_fabrica,
        dados.bt_manipulado,
        dados.bt_receita,
        dados.pr_preco,
        dados.bt_disponivel,
        dados.vl_lote,
        id,
    ]);
    return info.affectedRows;
}

export async function deletarMedicamento(id) {
    const comando = `
        DELETE FROM medicamentos
        WHERE id_produto = ?;
    `;
    const [info] = await conection.query(comando, [id]);
    return info.affectedRows;
}

export async function buscarMedicamentoPorId(id) {
    const comando = `
        SELECT * FROM medicamentos
        WHERE id_produto = ?;
    `;
    const [info] = await conection.query(comando, [id]);
    return info;
}

export async function filtrarMedicamentos(filtro) {
    const comando = `
        SELECT * FROM medicamentos
        WHERE nm_remedio LIKE ?;
    `;
    const [info] = await conection.query(comando, [`%${filtro}%`]);
    return info;
}
