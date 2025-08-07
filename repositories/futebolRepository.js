import { conection } from "../conection.js";


export async function listarTimes() {
    const comando = `
    SELECT *
      FROM times_futebol
  `
    const [registros] = await conection.query(comando)
    return registros;
}


export async function inserirTime(novoTime) {
    const comando = `
        INSERT INTO times_futebol 
        (nome, cidade, estado, pais, ano_fundacao, estadio, capacidade_estadio, tecnico, liga) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

    const [info] = await conection.query(comando, [
        novoTime.nome,
        novoTime.cidade,
        novoTime.estado,
        novoTime.pais,
        novoTime.ano_fundacao,
        novoTime.estadio,
        novoTime.capacidade_estadio,
        novoTime.tecnico,
        novoTime.liga
    ]);

    return info.insertId;
}

export async function atualizarTime(id, dadosAtualizados) {
    const comando = `
        UPDATE times_futebol
        SET nome = ?,
            cidade = ?,
            estado = ?,
            pais = ?,
            ano_fundacao = ?,
            estadio = ?,
            capacidade_estadio = ?,
            tecnico = ?,
            liga = ?
        WHERE id = ?;
    `;

    const [info] = await conection.query(comando, [
        dadosAtualizados.nome,
        dadosAtualizados.cidade,
        dadosAtualizados.estado,
        dadosAtualizados.pais,
        dadosAtualizados.ano_fundacao,
        dadosAtualizados.estadio,
        dadosAtualizados.capacidade_estadio,
        dadosAtualizados.tecnico,
        dadosAtualizados.liga,
        id
    ]);

    return info.insertId;
}


export async function deletarTime(id) {

    let comando = `
        DELETE FROM times_futebol
            WHERE id =  ?;
    `
    const [info] = await conection.query(comando, [id])
    return info.insertId
}