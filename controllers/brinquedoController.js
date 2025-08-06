const Brinquedo = require('../models/brinquedoModel');

exports.list = (req, res) => {
    Brinquedo.getAll((err, brinquedos) => {
        res.render('brinquedos/index', { brinquedos });
    });
};

exports.createForm = (req, res) => {
    res.render('brinquedos/create');
};

exports.create = (req, res) => {
    Brinquedo.create(req.body, () => {
        res.redirect('/brinquedos');
    });
};

exports.editForm = (req, res) => {
    Brinquedo.getById(req.params.id, (err, brinquedo) => {
        res.render('brinquedos/edit', { brinquedo });
    });
};

exports.update = (req, res) => {
    Brinquedo.update(req.params.id, req.body, () => {
        res.redirect('/brinquedos');
    });
};

exports.delete = (req, res) => {
    Brinquedo.delete(req.params.id, () => {
        res.redirect('/brinquedos');
    });
};