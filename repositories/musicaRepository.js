import { conection } from "../conection.js";

export async function listarMusicas() {
    const comando = `
        SELECT * FROM musicas;
    `;
    const [registros] = await conection.query(comando);
    return registros;
}

export async function inserirMusica(dados) {
    const comando = `
        INSERT INTO musicas 
            (nm_musica, ds_artista, url_musica, dt_lancamento, qtd_visualizacoes, hr_duracao, bt_destaque, ds_idioma)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?);
    `;
    const [info] = await conection.query(comando, [
        dados.nm_musica,
        dados.ds_artista,
        dados.url_musica,
        dados.dt_lancamento,
        dados.qtd_visualizacoes,
        dados.hr_duracao,
        dados.bt_destaque,
        dados.ds_idioma,
    ]);
    return info.insertId;
}

export async function alterarMusica(id, dados) {
    const comando = `
        UPDATE musicas
        SET nm_musica = ?,
            ds_artista = ?,
            url_musica = ?,
            dt_lancamento = ?,
            qtd_visualizacoes = ?,
            hr_duracao = ?,
            bt_destaque = ?,
            ds_idioma = ?
        WHERE id_musica = ?;
    `;
    const [info] = await conection.query(comando, [
        dados.nm_musica,
        dados.ds_artista,
        dados.url_musica,
        dados.dt_lancamento,
        dados.qtd_visualizacoes,
        dados.hr_duracao,
        dados.bt_destaque,
        dados.ds_idioma,
        id,
    ]);
    return info.affectedRows;
}

export async function deletarMusica(id) {
    const comando = `
        DELETE FROM musicas
        WHERE id_musica = ?;
    `;
    const [info] = await conection.query(comando, [id]);
    return info.affectedRows;
}

export async function buscarMusicaPorId(id) {
    const comando = `
        SELECT * FROM musicas
        WHERE id_musica = ?;
    `;
    const [info] = await conection.query(comando, [id]);
    return info;
}

export async function filtrarMusicas(filtro) {
    const comando = `
        SELECT * FROM musicas
        WHERE nm_musica LIKE ?;
    `;
    const [info] = await conection.query(comando, [`%${filtro}%`]);
    return info;
}
