const connection = require('../config/db');

exports.getAll = (callback) => {
    connection.query('SELECT * FROM brinquedos', (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
};

exports.getById = (id, callback) => {
    connection.query('SELECT * FROM brinquedos WHERE id = ?', [id], (err, results) => {
        callback(err, results[0]);
    });
};

exports.create = (data, callback) => {
    connection.query(
        'INSERT INTO brinquedos (nome, descricao, preco) VALUES (?, ?, ?)', 
        [data.nome, data.descricao, data.preco], 
        callback
    );
};

exports.update = (id, data, callback) => {
    connection.query(
        'UPDATE brinquedos SET nome = ?, descricao = ?, preco = ? WHERE id = ?', 
        [data.nome, data.descricao, data.preco, id], 
        callback
    );
};

exports.delete = (id, callback) => {
    connection.query('DELETE FROM brinquedos WHERE id = ?', [id], callback);
};
