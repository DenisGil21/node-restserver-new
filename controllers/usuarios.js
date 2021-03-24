const { response } = require('express');

const usuariosGet = (req, res = response) => {
    res.json({
        msg: 'get-controlador'
    });
}

const usuariosPut = (req, res) => {
    res.status(401).json({
        msg: 'put'
    });
}

const usuariosPost = (req, res) => {
    res.status(201).json({
        msg: 'post'
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