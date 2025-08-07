import { conection } from "../conection.js";


export async function listarTurmas() {
    let comando = ` 
            SELECT * FROM tb_turma;
    `
    const [registros] = await conection.query(comando);
    return registros
}

export async function inserirTurma(dados) {
    let comando = `
        insert into tb_turma (nm_turma, ds_curso, nr_ano_letivo, qtd_capacidade, bt_ativo, dt_inclusão)
        value
        (?,?,?,?,?,?);
 `

    const [info] = await conection.query(comando, [
        dados.nm_turma,
        dados.ds_curso,
        dados.nr_ano_letivo,
        dados.qtd_capacidade,
        dados.bt_ativo,
        dados.dt_inclusão,
    ])
    return info.insertId;
}

export async function alterarTurma(id, dados) {
    let comando = `
    UPDATE tb_turma
        SET nm_turma = ?,
        ds_curso = ?,
        nr_ano_letivo = ?,
        qtd_capacidade = ?,
        bt_ativo = ?,
        dt_inclusão = ?
    WHERE id_turma = ?
    `

    const [info] = await conection.query(comando, [
        dados.nm_turma,
        dados.ds_curso,
        dados.nr_ano_letivo,
        dados.qtd_capacidade,
        dados.bt_ativo,
        dados.dt_inclusão,
        id
    ]);
    return info.insertId;
}

export async function deletarTurma(id) {
    let comando = `
    DELETE from tb_turma
	where id_turma = ?;
    `

    let [info] = await conection.query(comando, [id])
    return info.affectedRows;


}




