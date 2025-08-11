import { conection } from "../conection.js";

export async function listarCarros() {
    const comando = `SELECT * FROM tb_carro;`;
    const [registros] = await conection.query(comando);
    return registros;
}

export async function inserirCarro(dados) {
    const comando = `
        INSERT INTO tb_carro 
            (ds_marca, ds_modelo, nr_ano, vl_preco, img_carro, dt_inclusao)
        VALUES (?, ?, ?, ?, ?, ?);
    `;
    const [info] = await conection.query(comando, [
        dados.ds_marca,
        dados.ds_modelo,
        dados.nr_ano,
        dados.vl_preco,
        dados.img_carro,
        dados.dt_inclusao,
    ]);
    return info.insertId;
}

export async function alterarCarro(id, dados) {
    const comando = `
        UPDATE tb_carro
        SET ds_marca = ?,
            ds_modelo = ?,
            nr_ano = ?,
            vl_preco = ?,
            img_carro = ?,
            dt_inclusao = ?
        WHERE id_carro = ?;
    `;
    const [info] = await conection.query(comando, [
        dados.ds_marca,
        dados.ds_modelo,
        dados.nr_ano,
        dados.vl_preco,
        dados.img_carro,
        dados.dt_inclusao,
        id,
    ]);
    return info.affectedRows;
}

export async function deletarCarro(id) {
    const comando = `DELETE FROM tb_carro WHERE id_carro = ?;`;
    const [info] = await conection.query(comando, [id]);
    return info.affectedRows;
}

export async function buscarCarroPorId(id) {
    const comando = `SELECT * FROM tb_carro WHERE id_carro = ?;`;
    const [info] = await conection.query(comando, [id]);
    return info;
}

export async function filtrarCarros(filtro) {
    const comando = `
        SELECT * FROM tb_carro
        WHERE ds_marca LIKE ? OR ds_modelo LIKE ?;
    `;
    const [info] = await conection.query(comando, [`%${filtro}%`, `%${filtro}%`]);
    return info;
}
