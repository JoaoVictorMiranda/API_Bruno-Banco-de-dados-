import { conection } from "../conection.js";


export async function listarJogos() {
    let comando = ` 
        SELECT * FROM avaliacao_jogos;
    `
    const [registros] = await conection.query(comando);
    return registros
}

export async function inserirJogo(dadosJogos) {
    let comando = `
    INSERT INTO avaliacao_jogos (nm_jogo, nm_franquia, ds_avaliacao, hr_jogadas, nota, ds_final)
    VALUES
    (?,?,?,?,?,?);
 `

    const [info] = await conection.query(comando, [
        dadosJogos.nmjogo,
        dadosJogos.nm_franquia,
        dadosJogos.ds_avaliacao,
        dadosJogos.hr_jogadas,
        dadosJogos.nota,
        dadosJogos.ds_final,
    ])
    return info.insertId;
}

export async function alterarJogo(id, dados) {
    let comando = `
    UPDATE avaliacao_jogos
        SET nm_jogo = ?,
        nm_franquia = ?,
        ds_avaliacao = ?,
        hr_jogadas = ?,
        nota = ?,
        ds_final = ?
    WHERE id_jogo = ?
    `

    const [info] = await conection.query(comando, [
        dados.nm_jogo,
        dados.nm_franquia,
        dados.ds_avaliacao,
        dados.hr_jogadas,
        dados.nota,
        dados.ds_final,
        id
    ]);
    return info.insertId;
}

export async function deletarJogo(id) {
    let comando = `
    DELETE FROM avaliacao_jogos
    WHERE id_jogo = ?;
    `

    let [info] = await conection.query(comando, [id])
    return info.affectedRows;


}




/*     "nm_jogo": "Terraria",
    "nm_franquia": "Terraria",
    "ds_avaliacao": "Um Jogo 2d  onde se acha que vai ser somente jogo basico de contrução porem tem horas e horas de gameplay onde bosses eventos e criação de itens para chegar o mais longe que conseguir",
    "hr_jogadas": "90:25:30",
    "nota": "8.0",
    "ds_final": 1 */