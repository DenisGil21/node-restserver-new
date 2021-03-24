const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {

    const { q, nombre = 'undefined', apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'get-controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPut = (req, res) => {

    const id = req.params.id;

    res.status(401).json({
        msg: 'put',
        id
    });
}

const usuariosPost = (req, res) => {

    const { nombre, edad } = req.body;

    res.status(201).json({
        msg: 'post',
        nombre,
        edad,
    });
}

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}