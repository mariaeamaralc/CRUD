const db = require('../config/db');

exports.getAll = (callback) => {
    db.query('SELECT * FROM brinquedos', callback);
};

exports.getById = (id, callback) => {
    db.query('SELECT * FROM brinquedos WHERE id = ?', [id], (err, results) => {
        callback(err, results[0]);
    });
};

exports.create = (data, callback) => {
    db.query('INSERT INTO brinquedos (nome, descricao, preco) VALUES (?, ?, ?)', 
        [data.nome, data.descricao, data.preco], callback);
};

exports.update = (id, data, callback) => {
    db.query('UPDATE brinquedos SET nome = ?, descricao = ?, preco = ? WHERE id = ?', 
        [data.nome, data.descricao, data.preco, id], callback);
};

exports.delete = (id, callback) => {
    db.query('DELETE FROM brinquedos WHERE id = ?', [id], callback);
};