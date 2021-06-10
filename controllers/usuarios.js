const {response, request} = require('express');

const usuariosGet = (req = request, res = response) => {  
    const {id, nombre = "sin nombre", apikey="", page="1", limit="10"} = req.query;
    
    res.json({
        msg: "get API - controller",
        id, 
        nombre, 
        apikey,
        page,
        limit
    });
  }

  const usuariosPost = (req, res = response) => {
    const {nombre, edad} = req.body;

    res.status(201).json({
        msg: "post API - controller",
        nombre, 
        edad
    });
  }

  const usuariosPut = (req, res = response) => {
    const {id} = req.params;

    res.status(400).json({
        msg: "put API - controller",
        id
    });
  }

  const usuariosDelete = (req, res = response) => {
    res.json({
        msg: "delete API - controller"
    });            
  }

  const usuariosPatch = (req, res = response) => {
    res.status(500).json({
        msg: "patch API - controller"
    });            
  }

  module.exports = {
      usuariosGet,
      usuariosPut,
      usuariosPost,
      usuariosDelete,
      usuariosPatch
  }